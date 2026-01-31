import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Contest from "./pages/Contest.jsx"
import RequireAuth from "./utils/RequireAuth.jsx"
import MainLayout from "./layouts/MainLayout"
import Problems from "./pages/Problems"

function App() {
  return (
      <Routes>

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
            <Route path="/contest" element={<Contest />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/problems" element={<Problems />} />
          <Route element={<MainLayout />}>
          </Route>
        </Route>

      </Routes>
  )
}

export default App
