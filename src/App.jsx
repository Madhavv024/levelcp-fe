import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import RequireAuth from "./utils/RequireAuth.jsx"
import MainLayout from "./layouts/MainLayout"
import Problems from "./pages/Problems"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problems" element={<Problems />} />
    </Routes>


        {/* Protected */}
        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
