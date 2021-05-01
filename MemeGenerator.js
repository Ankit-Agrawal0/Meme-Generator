import React from 'react'

class MemeGenerator extends React.Component{
  constructor(){
    super()
    this.state={
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allNewImgs: []
    }
    this.handlechange = this.handlechange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
    .then(
      response => response.json()
      )
    .then (response => {
      const {memes}= response.data
      
      this.setState({allNewImgs : memes})
    })
  }
  handlechange(event){
    const {name,value}= event.target;
    this.setState({
      [name]: value
      })
    }
  handleSubmit(event){
    event.preventDefault()
    const randnum= Math.floor(Math.random() * this.state.allNewImgs.length)
    const randMemeImg = this.state.allNewImgs[randnum].url
    this.setState({
      randomImg: randMemeImg
    })
    console.log(randMemeImg)
  }
  render(){
    return(
      
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          
          <input 
            className="toptext"
            type="text"
            placeholder=" Top Text"
            name="topText"
            value={this.state.topText}
            onChange={this.handlechange}
          />
          <input 
            type="text"
            placeholder=" Bottom Text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handlechange}
          />
          <button>Gen</button>
        </form>
        <div className='meme'>
          <img 
          src= {this.state.randomImg}
          alt="image not found" 
          />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
      )
  }
}

export default MemeGenerator