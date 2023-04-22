import "./navbar.scss"
import logo from "../../images/logo.png"
import avatar from "../../images/avatar.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ArrowDropDown } from "@mui/icons-material";
import {useState} from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.scrollY <= 200 ? false : true)
        return () => window.onscroll = null
    }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img className="logo" src={logo} alt="logo" />
                <ul className="links">
                    <li className="link"><a href="#">Home</a></li>
                    <li className="link"><a href="#">Series</a></li>
                    <li className="link"><a href="#">Movies</a></li>
                    <li className="link"><a href="#">New and Popular</a></li>
                    <li className="link"><a href="#">My List</a></li>
                </ul>
            </div>
            <div className="right">
                <div className="search">
                    <SearchIcon />
                    {/* <input type="text" placeholder="Search"/> */}
                </div>
                <p className="username">Poko</p>
                <NotificationsIcon />
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="profile">
                    <ArrowDropDown/>
                    <div className="drop">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar