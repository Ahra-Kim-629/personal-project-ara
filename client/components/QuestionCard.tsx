interface Props {
  question: {
    question: string
    choices: string[]
  }
  onAnswer: (choice: string) => void
}

export default function QuestionCard({ question, onAnswer}: Props) {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.choices.map((choice, i) => (
          <li key={i}>
            <button onClick={() => onAnswer(choice)}>{choice}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}