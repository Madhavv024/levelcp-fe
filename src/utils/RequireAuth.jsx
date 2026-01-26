import { Navigate, Outlet } from "react-router-dom"

function RequireAuth() {
  const token = localStorage.getItem("token")

  // If token exists → allow access
  if (token) {
    console.log("Token found:", token)
    return <Outlet />
  }

  // If not logged in → redirect to Home
  return <Navigate to="/" replace />
}

export default RequireAuth
