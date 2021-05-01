import React from 'react'
import "./App.css" 
class Header extends React.Component{
  
  render(){
    return(
      <header>
          <img className= "headerImg"
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt= " image not found"
          />
          <h1>Meme Generator</h1>
      </header>
      )
  }
}

export default Header