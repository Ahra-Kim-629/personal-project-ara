interface Props {
  choices: string[]
  selected: string | null
  answer: string
  onSelect: (choice: string) => void
}

export default function Choices({ choices, selected, answer, onSelect }: Props) {
  return (
    <ul>
      {choices.map((choice, i) => {
        const isCorrect = selected && choice === answer
        const isWrong = selected && choice === selected && choice !== answer

        return (
          <li key={i}>
            <button
            onClick={() => onSelect(choice)}
            disabled={!!selected}
            style={{
              backgroundColor: isCorrect
              ? 'lightgreen'
              : isWrong
              ? 'lightcoral'
              : '',
            }}>{choice}</button>
          </li>
        )
      })}
    </ul>
  )
}