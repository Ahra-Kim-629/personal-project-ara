interface Props {
  score: number
  onRestart: () => void
}

export default function ResultPage({ score, onRestart }: Props) {
  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>Your score is <strong>{score}</strong>.</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  )
}