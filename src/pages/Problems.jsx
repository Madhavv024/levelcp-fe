import { useEffect, useState } from "react"
import LevelSelector from "../components/levelselector"
import ProblemCard from "../components/ProblemCard"
import Pagination from "../components/Pagination"
import { fetchProblems } from "../api/problemsApi"

function Problems() {
  const [level, setLevel] = useState("Beginner")
  const [problems, setProblems] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchProblems(level, page).then((data) => {
      setProblems(data)
    })
  }, [level, page])

  return (
    <div className="container">
      <h1>Problems</h1>

      <LevelSelector
        selectedLevel={level}
        onSelect={(newLevel) => {
          setLevel(newLevel)
          setPage(1) // reset pagination
        }}
      />

      <div className="problem-list">
        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}


export default Problems
