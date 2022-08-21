import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export class App extends Component {
 constructor(){
  super()
 
   this.state={
      advice:""
    }
  }
  
  componentDidMount(){
   this.getdata();
    
  }
   getdata=()=>{
    axios.get("https://api.adviceslip.com/advice").then((response)=>{
      
      console.log(response.data.slip)
      const {advice}=response.data.slip;
      
     this.setState({
     advice: advice
     })
    })

  }

  


  render() {
    
   
    return (
      <div className='app'>
      <div className='card'>
       <h1 className='heading'>{this.state.advice}</h1>
       </div><br></br>
       <button className='btn' onClick={this.getdata}>GIVE ME ADVICE!!</button>
      </div>
    )
  }
}

export default App
