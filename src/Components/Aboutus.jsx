import React, { Component } from 'react'
import {Figure,Button} from 'react-bootstrap'

import background from './Assets/image/headerBackgroung.png'

export default class Aboutus extends Component {
  render() {
    return (
      <>
        {/* <div className='about-us'>
            <img src={background} alt="background" />
        </div> */}
            {/* <div class="container-fluid">
                    <div className="row about-us">
                        <div class="carousel-caption about-caption">
                            <h1>ABOUT US</h1>
                        </div>
                    <div class="col about-content">
                    <img className='about-image' src={background} alt="test" class="img-responsive" />  
            </div>  
         </div>
        </div> */}
        <div className='container-fluid about-us'>
            <div className='row about-content' >
                <div className='col-md-6 back-image'>
                <Figure >
                        <Figure.Image
                            className='about-image'
                            width={650}
                            height={500}
                            alt="650x500"
                            src={background}
                        />
                        </Figure>
                </div>
                <div className='col-md-6 image-content'>
                <h5>ABOUT US</h5>
                <h1>Architecture,<br/> Engineering &amp;<br/> Design Firm</h1>
                <p>We are the authority for completing construction projects in<br/> environmentally sensitive surroundings.</p>
                <Button className='btn-readmore'>READ  MORE</Button>{' '}
                </div>
            </div>
            <div className='container'>
                <div className='row more-about-us'>
                    <div className='col analysis'>
                        <div className='icon'><i class="fas fa-search"></i></div>
                        
                            <h1>Analysis</h1>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <Button className='btn-more'>READ  MORE</Button>{' '}
                    </div>
                    <div className='col planning'>
                        <div className='icon'><i class="fas fa-search"></i></div>
                        <h1>PLANNING</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        <Button className='btn-more'>READ  MORE</Button>{' '}
                    </div>
                    <div className='col design'>
                    <div className='icon'><i class="fas fa-search"></i></div>
                    
                        <h1>DESIGN</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        <Button className='btn-more'>READ  MORE</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
                 
      </>
    )
  }
}
