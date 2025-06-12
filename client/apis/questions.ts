export interface Question {
  id: number
  question: string
  choices: string[]
  answer: string
  explanation: string
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "What does '게으른' mean?",
    choices: ['shy', 'kind', 'lazy', 'angry'],
    answer: 'lazy',
    explanation: "'게으른' means someone doesn't want to work or be active.",
  },
  {
    id: 2,
    question: "What does '슬픈' mean?",
    choices: ['tired', 'sad', 'excited', 'funny'],
    answer: 'sad',
    explanation: "'슬픈' means feeling unhappy or sorrowful",
  },
  {
    id: 3,
    question: "What does '예의 바른' mean?",
    choices: ['angry', 'well-mannered', 'dirty', 'rude'],
    answer: 'well-mannered',
    explanation: "'예의 바른' means being polite and respectful toward others.",
  },
]

export async function getQuestions(): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockQuestions), 300)
  })
}