// import { useEffect, useState } from "react"
// import { getEnglishExplanation } from "../apis/dictionary"

// interface Question {
//   question: string
//   choices: string[]
//   answer: string
//   korean: string
// }

// interface Props {
//   question: Question
//   onAnswer: (choice: string) => void
//   onBack: () => void
// }

// export default function QuestionCard({ question, onAnswer}: Props) {
//   const [selected, setSelected] = useState<string | null>(null)
//   const [showNext, setShowNext] = useState(false)
//   const [explanation, setExplanation] = useState<string | null>(null)
//   const [example, setExample] = useState<string | null>(null)

//   useEffect(() => {
//     if (!selected) return 
//       getEnglishExplanation(question.answer).then((data) => {
//         if (!data) return
//           setExplanation(data.definition)

//             const exampleText = data.example?.replace(
//               new RegExp(`\\b${question.answer}\\b`, 'gi'),
//               question.korean
//             )
//             setExample(exampleText || null)
//           })
//       .catch((err) => {
//         console.error('Failed to fetch explanation:', err)
//         setExplanation('Unable to load explanation.')
//         setExample(null)
//       })
//   }, [selected, question.answer, question.korean])


//   function handleClick(choice: string) {
//     if (selected) return
//     setSelected(choice)
//     setShowNext(true)
//   }

//   function handleNext() {
//     onAnswer(selected!)
//     setSelected(null)
//     setShowNext(false)
//     setExplanation(null)
//     setExample(null)
//   }

//   return (
//     <div>
//       <h2>{question.question}</h2>
//       <ul>
//         {question.choices.map((choice, i) => {
//           const isCorrect = selected && choice === question.answer
//           const isWrong = selected && choice === selected && choice !== question.answer

//           return (
//           <li key={i}>
//             <button 
//             onClick={() => handleClick(choice)}
//             disabled={!!selected}
//             style={{
//               backgroundColor: isCorrect
//               ? 'lightgreen'
//               : isWrong
//               ? 'lightcoral'
//               : '',
//             }}
//             >{choice}
//             </button>
//           </li>
//           )
//         })}
//       </ul>

//       {selected && (
//         <>
//         {explanation && (
//           <p style={{ marginTop: '10px' }}>
//             <strong>Meaning:</strong> {explanation}
//           </p>
//         )}
//         {example && (
//           <p style={{ fontStyle: 'italic', marginTop: '5px' }}>
//             <strong>Example:</strong> {example}
//           </p>
//         )}
//         </>
//       )}

//       {showNext && (
//         <div style={{ marginTop: '10px' }}>
//           <button onClick={onBack}>Back</button>
//           <button onClick={handleNext} style={{ marginTop: '10px' }}>
//           Next
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }