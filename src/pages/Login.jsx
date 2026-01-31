import { useState } from "react"
import api from "../api/axios"


function Login() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await api.post("/auth/login", {
        userName: username,
        email,
        password,
      })

      const { token } = response.data
      localStorage.setItem("token", token)

      // later → navigate to dashboard
      console.log("Login successful")
      window.location.href = "/dashboard"
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const response = await api.post("/auth/register", {
        userName: username,
        email,
        password
      })
      console.log("Registration successful", response.data)
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // redirect to backend Google OAuth
    window.location.href = "http://localhost:8080/oauth2/authorization/google"
  }

  return (
    <div className="container">
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login Page</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <button type="button" onClick={handleRegister} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="divider">OR</div>

        <button
          type="button"
          className="google_btn"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>
      </form>
    </div>
    </div>
  )
}

export default Login
