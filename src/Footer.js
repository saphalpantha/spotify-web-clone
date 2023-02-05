import React from 'react'
import './Footer.css'
import { PlayCircleOutline, PlaylistPlayOutlined, VolumeDown } from '@mui/icons-material'
import { SkipPreviousOutlined } from '@mui/icons-material/'
import { SkipNextOutlined } from '@mui/icons-material/'
import { Shuffle } from '@mui/icons-material/'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Grid, Slider } from '@mui/material'
const Footer = () => {
  return (
    <div className="footer">
      <div className='footer__left'>
        <div className='footer__songInfo'>
        {/* <h1>Album and song details</h1> */}
        <img src="https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg" className="footer__img" alt=""/>
        <h4>Yeah!</h4>
        <p>usher</p>
        {/* <br></br> */}
        
        </div>
      </div>
      <div className='footer__center'>
        <Shuffle className="footer__green"/>
        <SkipPreviousOutlined className="footer__icon"/>
        <PlayCircleOutline fontSize="large" className=''/>
        <SkipNextOutlined className="footer__icon"/>
        <RepeatIcon className='footer__green'/>
        {/* <h1>Player Csontrols</h1> */} 
      </div>
      <div className='footer__right'>
        {/* <Grid container spacing={2}> */}
          {/* <PlaylistPlayOutlined/> */}
        <Grid item>
          <VolumeDown/>
        </Grid>
        <Grid item xs>
          <Slider/>
        {/* </Grid> */}
        </Grid>
        {/* <p>Volume Bar</p> */}
      </div>
    </div>
  )
}

export default Footer