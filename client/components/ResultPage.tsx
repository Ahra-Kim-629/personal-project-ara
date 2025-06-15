interface Props {
  score: number
  onRestart: () => void
  onRetryWrongs: () => void
}

export default function ResultPage({ score, onRestart, onRetryWrongs }: Props) {
  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>Your score is <strong>{score}</strong>.</p>
      <button onClick={onRestart}>Restart Quiz</button>
      <button onClick={onRetryWrongs} style={{ marginTop: '10px' }}>
        Retry Wrong Answers</button>
    </div>
  )
}