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
          <div className='col img-145'>
              <img src={photo1} alt="" />
              <img classNam='img-45' src={photo4} alt="" />
              <img classNam='img-45' img src={photo5} alt="" />
          </div>
          <div className='col img-26'>
              <img src={photo2} alt="" />
              {/* <img className='large-img' src={photo6} alt="" /> */}
          </div>
          <div className='col img -3'>
              <img src={photo3} alt="" />
          </div>
          <div className='col'>

          </div>
        </div>
          
        </div>
        
      </>
    )
  }
}
