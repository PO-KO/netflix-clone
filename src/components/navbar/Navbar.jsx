import "./navbar.scss"
import logo from "../../images/logo.png"
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
  return (
    <div className="navbar">
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
                <AddIcon />
            </div>
        </div>
    </div>
  )
}

export default Navbar