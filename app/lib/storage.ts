const KEY = 'wpm-history'

export function saveResult(data: any) {
  const history = JSON.parse(localStorage.getItem(KEY) || '[]')
  history.push(data)
  localStorage.setItem(KEY, JSON.stringify(history))
}

export function getHistory() {
  return JSON.parse(localStorage.getItem(KEY) || '[]')
}