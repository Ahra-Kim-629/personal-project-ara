import { useState } from "react"

interface Props {
  question: {
    question: string
    choices: string[]
    answer: string
  }
  onAnswer: (choice: string) => void
}

export default function QuestionCard({ question, onAnswer}: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  function handleClick(choice: string) {
    if (selected) return
    setSelected(choice)
    setTimeout(() => {
      onAnswer(choice)
      setSelected(null)
    }, 1000)
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
    </div>
  )
}