import React, { Component } from 'react'
import people1 from './Assets/image/people1.JPG'
import people2 from './Assets/image/people2.JPG'

export default class Meetteam extends Component {
  render() {
    return (
      <>
        <div className='header'>
            <h1>Meet the <span className='team'>team</span></h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div className='container-fluid'>
              <div className='row' id='people-img'>
                      <div className='col'>
                          <img src={people1} alt="" />
                      </div>
                      <div className='col image2'>
                      <img src={people2} alt="" />
                      </div>
                      <div className='col img-freepik'>
                        <p>Images from <a href="https://www.freepik.com/photos/people">Freepik</a></p>
                      </div>
                  </div>
          <div className='background'>
          
          </div>
           
        </div>
      </>
    )
  }
}
