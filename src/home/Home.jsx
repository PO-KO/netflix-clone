import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import "./home.scss"
function Home() {
  return (
    <div className="home">
      <Featured/>
      <Navbar/>
    </div>
  )
}

export default Home