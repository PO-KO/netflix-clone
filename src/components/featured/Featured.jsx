import React from 'react'
import cover from "../../images/demon-slayer.jpg"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import "./featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="cover">
            <img width="100%" src={cover} alt="cover" />
        </div>
        <div className="container">
            <div className="text">
                <h1 className="title">Demon Slayer</h1>
                <span className="season">Season 1</span>
                <p className="story">
                A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, 
                who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.
                </p>
                <div className="buttons">
                    <span>
                        <PlayArrow />
                        Play
                    </span>
                    <span>
                        <InfoOutlined/>
                        Info
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured