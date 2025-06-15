import { useEffect, useState } from 'react'
import QuizPage from './QuizPage'
import ResultPage from './ResultPage'
import type { Question } from '../apis/questions'

function App() {
  const [isFinished, setIsFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [lastScore, setLastScore] = useState<number | null>(null)
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([])
  const [retryWrongMode, setRetryWrongMode] = useState(false)

  useEffect(() => {
    const savedScore = localStorage.getItem('lastScore')
    if (savedScore) {
      setLastScore(Number(savedScore))
    }
  }, [])

  function handleRestart() {
    setScore(0)
    setIsFinished(false)
  }

  function handleFinish(finalScore: number, wrongs: Question[]) {
    setScore(finalScore)
    setWrongQuestions(wrongs)
    localStorage.setItem('lastScore', finalScore.toString())
    setIsFinished(true)
  }

  return (
    <>
      <div className="app">
        <h1>Korean/English Quiz!</h1>
        {lastScore !== null && <p>Last Score: {lastScore}</p>}
        {!isFinished ? (
          <QuizPage setIsFinished={handleFinish}
          questions={retryWrongMode ? wrongQuestions : undefined} />
        ) : (
          <ResultPage 
          score={score} 
          onRestart={handleRestart}
          onRetryWrongs={() => {
            setRetryWrongMode(true)
            setIsFinished(false)
          }} />
        )}
      </div>
    </>
  )
}

export default App
