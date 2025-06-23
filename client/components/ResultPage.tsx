import { Question } from "../apis/questions"

interface Props {
  score: number
  total: number
  wrongQuestions: Question[]
  onRestart: () => void
  onRetryWrongs: () => void
}

export default function ResultPage({ score, total, wrongQuestions, onRestart, onRetryWrongs }: Props) {
  const percentage = Math.round((score / total) * 100)

  let message = ''
  if (percentage === 100) {
    message = "Perfect score! You're amazing!"
  } else if (percentage >= 80) {
    message = "Great job! Just a few mistakes."
  } else if (percentage >= 50) {
    message = "Not bad! Keep practicing!"
  } else {
    message = "Keep going! You're learning!"
  }

  return (
    <div className="result-card">
      <h2>Quiz Complete!</h2>
      <p className="result-score">Your score: <strong>{score} / {total}</strong>({percentage}%)</p>
      <p className="result-message">{message}</p>

      <button onClick={onRestart} className="result-button">Restart Quiz</button>
      <button onClick={onRetryWrongs} className="result-button">
        Retry Wrong Answers</button>
      {wrongQuestions.length > 0 && (
        <div className="incorrect-list">
          <h3>Incorrect Answers</h3>
          <ul>
            {wrongQuestions.map((q, i) => (
              <li key={i}>
                <strong>{q.question}</strong><br />
                Correct answer: <em>{q.answer}</em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}