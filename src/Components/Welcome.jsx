import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class Welcome extends Component {
  render() {
    return (
      <>
        <div className='top'>
           <div className='row welcome-head'>
               <div className='col top-heading'>
                    <h4>WELCOME TO</h4>
                    <h1>Construction <br/> Company</h1>
                    <p>We are the leader with 25 years of experience in the construction market!</p>
               </div>
               <div className='col content'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem. Vestibulum feugiat eros lorem, vitae faucibus arcu aliquam ac. Sed tempor, arcu non sodales gravida, sapien dui iaculis felis, vel luctus sapien nisi non orci. Ut laoreet ante tellus, vel hendrerit lorem tincidunt sed. Etiam rhoncus euismod velit ac rutrum.

                  Donec porttitor turpis eu mi tempus facilisis. Maecenas id ullamcorper elit, quis tempus enim. In dignissim dolor in accumsan tincidunt. Donec vel diam vitae risus elementum congue. Cras varius, enim vitae condimentum mattis, erat lacus.</p>
                  <Button className='btn-readmore'>LEARN  MORE</Button>{' '}
               </div>

           </div>
        </div>
      </>
    )
  }
}
