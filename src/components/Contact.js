import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
        contact: []
    }
  }
  
  componentDidMount() {
    document.title = 'Contact'
  }

  render() {
    return (
        <>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex  slide-in-bottom text-white '>
              <div>
                <h1 className=''>Contact me</h1><p></p>
                <a href ="https://line.me/ti/p/PyuN3XTe05" target="_blank"><img className='img-fluid slide-in-left' src='./img/line.png' width="100" height="100" alt='...'/></a><p></p>
                <p className='slide-in-left'>LineID: non21146</p><p></p>
                <a href ="https://www.linkedin.com/in/turanon-hothong-10a9b6265/" target="_blank"><img className='img-fluid slide-in-right' src='./img/linkedin.png' width="100" height="100" alt='...'/></a><p></p>
                <p className='slide-in-right'>Linkedin: Turanon Hothong</p>
                <a href ="https://github.com/non21246" target="_blank"><img className='img-fluid slide-in-right' src='./img/github.png' width="100" height="100" alt='...'/></a>
                <p className='slide-in-left'>Github: Turanon Hothong</p>
              </div>
            </div>
            <div className='col-lg-1 col-md-12 col-sm-12'>
              {' '}
            </div>
          <div className='col-lg-5 col-md-12 col-sm-12 fs-1'>
            <h1 className='text-center'>Comment</h1>
            <p>Your Name :  <input/></p>
            <p>Your Email : <input/></p>
            <p>Subject :    <input/></p>
            <p>Message :    <input/></p>
          </div>
        </div>
      </>
    )
  }
}