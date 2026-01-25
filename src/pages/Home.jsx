import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import AboutSection from "../components/AboutSection"
import "../styles/_home.scss"

function Home() {
    return (
        <>
      <Header />
      <HomeBanner />
      <AboutSection />
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
    </>
    )

}
export default Home