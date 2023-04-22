import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import Block from "../components/block/Block"
import "./home.scss"
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Featured/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
    </div>
  )
}

export default Home