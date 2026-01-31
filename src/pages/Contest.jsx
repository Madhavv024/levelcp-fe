import { useEffect, useState } from "react";
import "../styles/_Contest.scss";
import { useAuth } from "../context/AuthContext.jsx";
import { useApi } from "../api/api";
// /const { accessToken, updateAccessToken } = useAuth();


function Contest() {
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [problems, setProblems] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [contestStarted, setContestStarted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const { request } = useApi();

  const createContest = async () => {
    if (!level) {
      setPopupMessage("Please select level");
      setShowPopup(true);
      return;
    }

    setLoading(true);
    try {
      const data = await request("/api/round/createRound", {
        method: "POST",
        body: JSON.stringify({ level }),
      });

      setProblems(data.problems);
      setTimeLeft(data.duration);
      setContestStarted(true);
    } catch (err) {
      setPopupMessage(err.message);
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  // Timer
  useEffect(() => {
    if (!contestStarted || timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [contestStarted, timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="contest-page">
      {!contestStarted ? (
        <div className="contest-setup">
          <h1>Create Contest</h1>

          <div className="levels">
            <input
              type="number"
              min={1}
              max={100}
              value={level}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "") return setLevel("");
                const num = Number(val);
                if (num >= 1 && num <= 100) setLevel(num);
              }}
              placeholder="Enter level (1-100)"
            />
          </div>

          <button className="start-btn" onClick={createContest} disabled={loading}>
            {loading ? "Creating..." : "Start Contest"}
          </button>
        </div>
      ) : (
        <div className="contest-live">
          <div className="contest-header">
            <h2>Contest Live</h2>
            <div className="timer">⏳ {formatTime(timeLeft)}</div>
          </div>

          <div className="problems">
            {problems.map((p, idx) => (
              <a key={idx} href={p.url} target="_blank" rel="noopener noreferrer" className="problem-card">
                <span>Problem {idx + 1}</span>
                <h3>{p.title}</h3>
              </a>
            ))}
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contest;
