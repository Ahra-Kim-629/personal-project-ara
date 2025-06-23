import { useEffect, useState } from "react"
import Choices from "./Choices"
import Explanation from "./Explanation"
import { getEnglishExplanation } from "../../apis/dictionary"

interface Question {
  question: string
  choices: string[]
  answer: string
  korean: string
}

interface Props {
  question: Question
  onAnswer: (choice: string) => void
  onBack: () => void
}

export default function QuestionCard({ question, onAnswer, onBack}: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showNext, setShowNext] = useState(false)
  const [explanation, setExplanation] = useState<string | null>(null)
  const [example, setExample] = useState<string | null>(null)

  useEffect(() => {
    if (!selected) return 
      getEnglishExplanation(question.answer).then((data) => {
        if (!data) return
          setExplanation(data.definition)

            const exampleText = data.example?.replace(
              new RegExp(`\\b${question.answer}\\b`, 'gi'),
              question.korean
            )
            setExample(exampleText || null)
          })
      .catch((err) => {
        console.error('Failed to fetch explanation:', err)
        setExplanation('Unable to load explanation.')
        setExample(null)
      })
  }, [selected, question.answer, question.korean])


  function handleClick(choice: string) {
    if (selected) return
    setSelected(choice)
    setShowNext(true)
  }

  function handleNext() {
    onAnswer(selected!)
    setSelected(null)
    setShowNext(false)
    setExplanation(null)
    setExample(null)
  }

  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <Choices
      choices={question.choices}
      selected={selected}
      answer={question.answer}
      onSelect={handleClick}
      />
      {selected && <Explanation explanation={explanation} example={example} />}
      {showNext && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={onBack} className="next-button">Back</button>
          <button onClick={handleNext} className="next-button" style={{ marginLeft: '10px' }}>
            Next
          </button>
        </div>
      )}
    </div>
  )
}
