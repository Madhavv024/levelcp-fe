const levels = [
  "Beginner",
  "Easy",
  "Easy-Medium",
  "Medium",
  "Medium-Hard",
  "Hard",
  "Advanced",
  "Expert",
  "Master",
  "Grandmaster",
]

function LevelSelector({ selectedLevel, onSelect }) {
  return (
    <div className="level-selector">
      {levels.map((level) => (
        <button
          key={level}
          className={selectedLevel === level ? "active" : ""}
          onClick={() => onSelect(level)}
        >
          {level}
        </button>
      ))}
    </div>
  )
}

export default LevelSelector
