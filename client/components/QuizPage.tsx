import { useEffect, useState } from "react"
import { getQuestions, Question } from '../apis/questions'
import QuestionCard from './QuestionCard'

interface Props {
  setIsFinished: (finalScore: number, wrongs: Question[]) => void
  questions?: Question[]
}

export default function QuizPage({ setIsFinished, questions: initialQuestions }: Props) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([])

  useEffect(() => {
    if (initialQuestions) {
      setQuestions(initialQuestions)
    } else {
    const fetchQuestions = async () => {
      const data = await getQuestions()
      setQuestions(data)
    }
    fetchQuestions()
  }}, [initialQuestions])

  function handleAnswer(choice: string) {
    const current = questions[currentIndex]
    const isCorrect = choice === current.answer
    const newScore = isCorrect ? currentScore + 1 : currentScore

    if (!isCorrect) {
      setWrongQuestions((prev) => [...prev, current])
    }

    const next = currentIndex + 1
    if (next < questions.length) {
      setCurrentScore(newScore)
      setCurrentIndex(next)
    } else {
      setIsFinished(newScore, wrongQuestions)
    }
    }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  
  if (questions.length === 0) return <p>Loading questions...</p>

  return (
    <QuestionCard question={questions[currentIndex]} onAnswer={handleAnswer} onBack={handleBack} />
  )
}