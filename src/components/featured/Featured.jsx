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
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecd51263-bb0f-4465-af86-f7ed25e58e70/degn0zh-7782f57b-4e2a-4236-b004-c8b2a04570eb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjZDUxMjYzLWJiMGYtNDQ2NS1hZjg2LWY3ZWQyNWU1OGU3MFwvZGVnbjB6aC03NzgyZjU3Yi00ZTJhLTQyMzYtYjAwNC1jOGIyYTA0NTcwZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._tAmT-WYwZL2rfdHvx2g4qcSx54NAL3icQEp1CbIJ0c" alt="title" className="title" />
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
                        More Info
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured