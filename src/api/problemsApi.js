export async function fetchProblems(level, page) {
  // TEMP: mock data
  const allProblems = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    title: `Problem ${i + 1}`,
    difficulty: level,
    tags: ["arrays", "math"],
  }))

  const start = (page - 1) * 4
  const end = start + 4

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allProblems.slice(start, end))
    }, 400)
  })
}
import axios from "axios"

export async function fetchProblems(level, page) {
  const response = await axios.get(
    `/api/problems?level=${level}&page=${page}`
  )
  return response.data
}
