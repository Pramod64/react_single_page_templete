import React, { Component } from 'react'
import Aboutus from './Components/Aboutus'
import Header from './Components/Header'
import Howwework from './Components/Howwework'
import Meetteam from './Components/Meetteam'
import Welcome from './Components/Welcome'

export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Aboutus/>
        <Meetteam />
        <Welcome/>
        <Howwework />
      </>
    )
  }
}
