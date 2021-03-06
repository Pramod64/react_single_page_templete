import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import photo7 from './Assets/image/photo7.jpg'
import photo8 from './Assets/image/photo8.jpg'

export default class Learn extends Component {
  render() {
    return (
      <>
        <div className='learn-content'>
            <p>Eget egestas purus viverra accumsan in nisl nisi. Viverra ipsum nunc aliquet bibendum enim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Id semper risus in hendrerit.</p>
            <Button className='btn-readmore' id='learn'>LEARN  MORE</Button>{' '}
        </div>

        <div className='container-fluid '>
          <div className='background2'>

          </div>
            <div className='row row-content'>
              <div className='col heading1'>
                  <h1>Expert, Efficient, Collaborative.
                          Build With Experience</h1>
              </div>
              <div className='col img-7'>
                  <img src={photo7} alt="" />
              </div>
            </div>
            <div className='col-first'>
                <img src={photo8} alt="" />
                
                
            </div>
            <div className='row'>
                  <div className='col-6'>
                      <div className='inner-circle'>
                      </div>
                  </div>
                  <div className='col-3 our-vision'>
                        <div className='vision-content'>
                        <h1>OUR VISION</h1>
                        <p>We thrive on new challenges and are at our best when a project is technically or logistically demanding and requires smart planning.</p>
                        <p>Images from <a href="https://www.freepik.com/photos/city">Freepik</a> </p>
                        <Button className='btn-readmore'>LEARN  MORE</Button>{' '}
                        </div>
                  </div>
                </div>

        </div>
      </>
    )
  }
}
