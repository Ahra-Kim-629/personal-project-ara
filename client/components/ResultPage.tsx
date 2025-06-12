interface Props {
  score: number
}

export default function ResultPage({ score }: Props) {
  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>Your score is <strong>{score}</strong>.</p>
    </div>
  )
}