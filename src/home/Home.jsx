import Navbar from "../components/navbar/Navbar"
import cover from "../images/demon-slayer.jpg"
import "./home.scss"
function Home() {
  return (
    <div className="home">
      <img width="100%" src={cover} alt="cover" />
      <Navbar/>
    </div>
  )
}

export default Home