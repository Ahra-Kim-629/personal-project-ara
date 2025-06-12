import { useEffect, useState } from "react"
import { getQuestions } from '../apis/questions'
import QuestionCard from './QuestionCard'

interface Question {
  id: number
  question: string
  choices: string[]
  answer: string
}

interface Props {
  setIsFinished: (done: boolean) => void
  setScore: (score: number) => void
}

export default function QuizPage({ setIsFinished, setScore }: Props) {
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
    if (choice === current.answer) {
      setCurrentScore((prev) => prev + 1)
    }

    const next = currentIndex + 1
    if (next < questions.length) {
      setCurrentIndex(next)
    } else {
      setScore(currentScore)
      setIsFinished(true)
    }
  }
  if (questions.length === 0) return <p>Loading questions...</p>

  return (
    <QuestionCard question={questions[currentIndex]} onAnswer={handleAnswer} />
  )
}