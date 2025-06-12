import { useEffect, useState } from 'react'
import QuizPage from './QuizPage'
import ResultPage from './ResultPage'

function App() {
  const [isFinished, setIsFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [lastScore, setLastScore] = useState<number | null>(null)

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

  function handleFinish(finalScore: number) {
    setScore(finalScore)
    localStorage.setItem('lastScore', finalScore.toString())
    setIsFinished(true)
  }

  return (
    <>
      <div className="app">
        <h1>Korean/English Quiz!</h1>
        {lastScore !== null && <p>Last Score: {lastScore}</p>}
        {!isFinished ? (
          <QuizPage setIsFinished={handleFinish} />
        ) : (
          <ResultPage score={score} onRestart={handleRestart} />
        )}
      </div>
    </>
  )
}

export default App
