export interface Explanation {
  definition: string
  example?: string
}

export async function getEnglishExplanation(word: string): Promise<Explanation | null> {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

  if (!res.ok) {
    return null
  }

  const data = await res.json()

  const firstMeaning = data[0]?.meanings?.[0]
  const firstDef = firstMeaning?.definitions?.[0]

  if (!firstDef) return null

  return {
    definition: firstDef.definition,
    example: firstDef.example,
  }
}