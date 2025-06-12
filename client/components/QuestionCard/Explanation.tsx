interface Props {
  explanation: string | null
  example: string | null
}

export default function Explanation({ explanation, example }: Props) {
  return (
    <>
    {explanation && (
      <p style={{ marginTop: '10px' }}>
        <strong>Meaning:</strong> {explanation}
      </p>
    )}
    {example && (
      <p style={{ fontStyle: 'italic', marginTop: '5px' }}>
        <strong>Example:</strong> {example}
      </p>
    )}
    </>
  )
}