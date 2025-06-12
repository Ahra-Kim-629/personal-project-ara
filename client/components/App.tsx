import { useState } from 'react'
import QuizPage from './QuizPage'
import ResultPage from './ResultPage'

function App() {
  const [isFinished, setIsFinished] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <>
      <div className="app">
        <h1>Korean/English Quiz!</h1>
        {!isFinished ? (
          <QuizPage setIsFinished={setIsFinished} setScore={setScore} />
        ) : (
          <ResultPage score={score} />
        )}
      </div>
    </>
  )
}

export default App
