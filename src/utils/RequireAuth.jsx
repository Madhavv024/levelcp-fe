import { Navigate, Outlet } from "react-router-dom"

function RequireAuth() {
  const token = localStorage.getItem("token")

  // If token exists → allow access
  if (token) {
    return <Outlet />
  }

  // If not logged in → redirect to Home
  return <Navigate to="/" replace />
}

export default RequireAuth
