const PRACTICE_OPENING_DATE = new Date(1994, 8, 14) // September 14, 1994

export interface PracticeAge {
  years: number
  months: number
  days: number
}

/** Exact years/months/days elapsed since the practice opened, as of `now`. */
export function getPracticeAge(now: Date = new Date()): PracticeAge {
  let years = now.getFullYear() - PRACTICE_OPENING_DATE.getFullYear()
  let months = now.getMonth() - PRACTICE_OPENING_DATE.getMonth()
  let days = now.getDate() - PRACTICE_OPENING_DATE.getDate()

  if (days < 0) {
    months -= 1
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
  }
  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years, months, days }
}
