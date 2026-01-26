import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import AboutSection from "../components/AboutSection"
import Feature from "../components/Feature"
import "../styles/_home.scss"

function Home() {
    return (
        <>
      <Header />
      <HomeBanner />
      <AboutSection />
      <Feature />
    </>
    )

}
export default Home