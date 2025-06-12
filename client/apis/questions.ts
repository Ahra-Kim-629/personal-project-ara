export interface Question {
  id: number
  question: string
  choices: string[]
  answer: string
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "What does 'lazy' mean?",
    choices: ['수줍은', '친절한', '화난', '게으른'],
    answer: '게으른',
  },
  {
    id: 2,
    question: "What is the opposite of 'happy'?",
    choices: ['슬픈', '신난', '피곤한', '재미있는'],
    answer: '슬픈',
  },
  {
    id: 3,
    question: "What does 'polite' mean?",
    choices: ['무례한', '예의 바른', '지저분한', '화난'],
    answer: '예의 바른',
  },
]

export async function getQuestions(): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockQuestions), 300)
  })
}