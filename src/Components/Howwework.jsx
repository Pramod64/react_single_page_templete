import React, { Component } from 'react'
import photo1 from './Assets/image/photo1.JPG'
import photo2 from './Assets/image/photo2.JPG'
import photo3 from './Assets/image/photo3.JPG'
import photo4 from './Assets/image/photo4.JPG'
import photo5 from './Assets/image/photo5.JPG'
import photo6 from './Assets/image/photo6.JPG'

export default class Howwework extends Component {
  render() {
    return (
      <>
        <div className='head'>
            <h1>How We Work</h1>
            <p>Viverra nam libero justo laoreet sit. Nisl nunc mi ipsum faucibus. Ut ornare lectus sit amet est placerat in egestas. Felis donec et odio pellentesque. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tellus pellentesque eu tincidunt tortor aliquam nulla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.

</p>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
                <img src={photo1} alt="" />
            </div>
            <div className='col-4'>
                <img src={photo2} alt="" />
            </div>
            <div className='col-4'>
                <img src={photo3} alt="" />
            </div>
          </div>

          <div className='background1'>

          </div>

          <div className='row-2' id='row-2'>
            <div className='first-col'>
              <div className='sub-f-c'>
                <img src={photo4} alt="" />
              </div>
              <div className='sub-f-c'>
                <img src={photo5} alt="" />
              </div>
            </div>
            <div className='second-col'>
              <img src={photo6} alt="" />
            </div>
          </div>
        </div>
          
   
        
      </>
    )
  }
}
