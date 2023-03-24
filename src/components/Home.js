import React, { Component } from 'react'
import MovingText from 'react-moving-text'

export default class Home extends Component {
  componentDidMount(){
    document.title = 'Home'
  }
  
  render() {
    return (
      <div className='row '>
        <div className='col-lg-1 col-md-12 col-sm-12'>
          {' '}
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12 d-flex align-items-center'>
            <div className='slide-in-left'>{' '}   
                <h1 className='m-0'>Hi Everybody,</h1>
                <h2 className='m-0 animate-charcter'>I'm Turanon Hothong,</h2>
                <MovingText 
                  className='fs-5'
                  type="typewrite"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in-out"
                  iteration="infinite"
                  fillMode="none">
                  <MovingText  type="typewriter"dataText={['Backend Developer','Frontend Developer','Programmer','Student']} />
                </MovingText>
            </div> 
        </div >
        <div className='col-lg-3 col-md-12 col-sm-12'>
          {' '}
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12 slide-in-right'>
            <img className='img-fluid' alt='...' src='./img/me.jpg' width='360' height='640' /> {' '}
        </div >
      </div>
    )
  }
}