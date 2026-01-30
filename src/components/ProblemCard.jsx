function ProblemCard({ problem }) {
  return (
    <div className="problem-card">
      <h3>{problem.title}</h3>
      <p>Difficulty: {problem.difficulty}</p>
      <p>Tags: {problem.tags.join(", ")}</p>
    </div>
  )
}

export default ProblemCard
