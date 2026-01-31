import { useEffect, useState } from "react";
import "../styles/_dashboard.scss";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [solveMatrix, setSolveMatrix] = useState({});

  const handle = "graphx"; // replace with dynamic username later

  useEffect(() => {
    // Fetch user info
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setUser(data.result[0]);
        } else {
          setError("User not found");
        }
      })
      .catch(() => setError("Failed to fetch user"));

    // Fetch submissions
    fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setSolveMatrix(buildSolvedMatrix(data.result));
        }
      })
      .catch(() => console.error("Failed to fetch submissions"));
  }, []);

  if (error) {
    return (
      <div className="container">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="profile-page-wrapper">
        <div className="profile-card">
          <div className="header">
            <img src={user.avatar} alt="avatar" className="avatar" />
            <div>
              <h2>{user.handle}</h2>
              <p className="rank">{user.rank}</p>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <span className="label">Rating</span>
              <span className="value">{user.rating ?? "—"}</span>
            </div>
            <div className="stat">
              <span className="label">Max Rating</span>
              <span className="value">{user.maxRating ?? "—"}</span>
            </div>
            <div className="stat">
              <span className="label">Contribution</span>
              <span className="value">{user.contribution}</span>
            </div>
            <div className="stat">
              <span className="label">Friends</span>
              <span className="value">{user.friendOfCount}</span>
            </div>
          </div>

          <div className="extra">
            <p>
              <strong>Country:</strong> {user.country ?? "—"}
            </p>
            <p>
              <strong>Organization:</strong> {user.organization ?? "—"}
            </p>
          </div>
        </div>

        <div className="matrix-card">
          <h3>Problems Solved</h3>

          <div className="matrix">
            {Object.entries(solveMatrix).map(([date, count]) => (
              <div
                key={date}
                className={`cell level-${Math.min(count, 4)}`}
                title={`${date}: ${count} solved`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function buildSolvedMatrix(submissions) {
  const dayMap = {};

  submissions.forEach((sub) => {
    if (sub.verdict === "OK") {
      const date = new Date(sub.creationTimeSeconds * 1000)
        .toISOString()
        .slice(0, 10);

      dayMap[date] = (dayMap[date] || 0) + 1;
    }
  });

  return dayMap; // { "2025-01-10": 3, ... }
}

export default Dashboard;
