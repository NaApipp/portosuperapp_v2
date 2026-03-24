export function calculateStats(input: string, text: string, time: number) {
  const chars = input.length
  const correct = input.split('').filter((c, i) => c === text[i]).length
  const errors = chars - correct

  const wpm = Math.round((chars / 5 / time) * 60)
  const accuracy = Math.round((correct / chars) * 100) || 0

  return { wpm, accuracy, errors, chars, correct }
}