import { useEffect, useState } from "react"
import { getQuestions, Question } from '../apis/questions'
import QuestionCard from './QuestionCard'

interface Props {
  setIsFinished: (finalScore: number) => void
}

export default function QuizPage({ setIsFinished }: Props) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  useEffect(() => {
    async function fetchQuestions() {
      const data = await getQuestions()
      setQuestions(data)
    }
    fetchQuestions()
  }, [])

  function handleAnswer(choice: string) {
    const current = questions[currentIndex]
    const isCorrect = choice === current.answer
    const newScore = isCorrect ? currentScore + 1 : currentScore

    const next = currentIndex + 1
    if (next < questions.length) {
      setCurrentScore(newScore)
      setCurrentIndex(next)
    } else {
      setIsFinished(newScore)
    }
    }
  
  if (questions.length === 0) return <p>Loading questions...</p>

  return (
    <QuestionCard question={questions[currentIndex]} onAnswer={handleAnswer} />
  )
}