import { useState } from "react"

interface Props {
  question: {
    question: string
    choices: string[]
    answer: string
    explanation: string
  }
  onAnswer: (choice: string) => void
}

export default function QuestionCard({ question, onAnswer}: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showNext, setShowNext] = useState(false)

  function handleClick(choice: string) {
    if (selected) return
    setSelected(choice)
    setShowNext(true)
  }

  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.choices.map((choice, i) => {
          const isCorrect = selected && choice === question.answer
          const isWrong = selected && choice === selected && choice !== question.answer

          return (
          <li key={i}>
            <button 
            onClick={() => handleClick(choice)}
            disabled={!!selected}
            style={{
              backgroundColor: isCorrect
              ? 'lightgreen'
              : isWrong
              ? 'lightcoral'
              : '',
            }}
            >{choice}
            </button>
          </li>
          )
        })}
      </ul>
      {selected && (
        <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
          💡{question.explanation}
        </p>
      )}

      {showNext && (
        <button onClick={() => {
          onAnswer(selected!)
          setSelected(null)
          setShowNext(false)
        }}>
          Next
        </button>
      )}
    </div>
  )
}