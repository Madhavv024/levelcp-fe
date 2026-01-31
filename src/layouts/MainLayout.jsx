import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
      <header>/* your navbar */</header>
      <main>
        <Outlet /> {/* nested routes will render here */}
      </main>
    </div>
  );
}
export default MainLayout