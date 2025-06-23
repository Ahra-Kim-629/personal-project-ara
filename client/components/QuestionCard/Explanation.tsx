interface Props {
  explanation: string | null
  example: string | null
}

export default function Explanation({ explanation, example }: Props) {
  return (
    <>
    {explanation && (
      <p className="explanation">
        <strong>Meaning:</strong> {explanation}
      </p>
    )}
    {example && (
      <p className="explanation">
        <strong>Example:</strong> {example}
      </p>
    )}
    </>
  )
}