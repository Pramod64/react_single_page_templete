import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'

export default class Getintouch extends Component {
  render() {
    return (
      <>
      <div className='wrapper'>
        <div className='get-in-touch'>
          <h1>Get in Touch!</h1>
          <p>We are looking forward to start a project with you!</p>
        </div>
        <div className='background3'>

        </div>
        <div className='form-group'>
        <div className='row form-content'>
            <div className='col-6 form-labels'>
              <div>
                  <p><i class="fas fa-map-marker-alt"></i><br/>121 Rock Sreet, 21 Avenue, New York, <br/>NY 92103-9000</p>
                  <p><i class="fas fa-phone-alt"></i><br /> 1 (234) 567-891 <br/>
                      1 (234) 987-654</p>
                      <p><i class="far fa-clock"></i><br /> Mon – Fri …… 10 am – 8 pm <br />
                          Sat, Sun …… Closed</p>
                </div>
            </div>
          <div className='col-4 form-border'>
              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder='Enter your message'/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Button className='btn-readmore'>LEARN  MORE</Button>{' '}
                  </Form.Group>
              </Form>
          </div>
        </div>
        </div>
            <div className='social-media'>
              <center>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-linkedin"></i>
              </center>
            </div>
        </div>
      </>
    )
  }
}
