import "./block.scss"
import ListItem from "../listItem/ListItem" 
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { useRef, useState } from "react"

const List = () => {
  const [slideNum, setSlideNum] = useState(0)
  const blockref = useRef()
  const handleClick = (direction) => {
    let distance = blockref.current.getBoundingClientRect().x - 60

    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1)
      blockref.current.style.transform = `translateX(${213 + distance}px)`
    } 

    if(direction === "right" && slideNum < 5) {
      setSlideNum(slideNum + 1)
      blockref.current.style.transform = `translateX(${distance - 213}px)`
    }
  }

  return (
    <div className="block">
        <div className="container">
            <h3 className="title">Popular now in netflix</h3>
            <div className="wrapper">
                  {
                    slideNum > 0 && <div className="indicator left" onClick={() => handleClick("left")}>
                                      <ArrowBackIos/> 
                                    </div>
                  }
                
                <div className="content" ref={blockref}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
                {
                    slideNum < 5 && <div className="indicator right" onClick={() => handleClick("right")}>
                                      <ArrowForwardIos/>
                                    </div>
                }
                
            </div>
        </div>
    </div>
  )
}

export default List