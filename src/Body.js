import React from 'react'
import "./Body.css"
import Header from './Header'
const Body = ({spotify}) => {
  return (
    <div className="body">
      <Header spotify={spotify}/>
    <div className='body__info'>
      <img className='body__img' src="https://static.vecteezy.com/system/resources/previews/005/327/567/non_2x/dark-pink-purple-liquid-blur-gradient-background-free-photo.jpg" alt=""/>
      <div classNmae="body__infoText">
        <strong>PLAYLISTS</strong>
        <h2>Discover Weekly</h2>
        <p>description</p>
      </div>
       </div>
    </div>
  
    )
}

export default Body