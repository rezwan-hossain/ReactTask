import React, { Component } from "react";



import Header from './Header.js'
import Action from './Action.js'
import SectionA from './SectionA.js'
import SectionB from './SectionB.js'
class LandingPage extends Component {
  
  render(){
    return(
      <div> 
        <Header title="Home"/>
        <Action title="Your title or pass it via props :)"/>
        <SectionA />
        <SectionB />
        <img  src="../image/Branding.svg"/>
      </div>   
    )
  }
}

export default LandingPage;