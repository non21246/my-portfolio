import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer style={{padding:10}} className='footer footer-copyright text-center'>@ {new Date().getFullYear()} copyright : <a href='https://www.northbkk.ac.th/' target="_blank" rel="noopener">ITDI.northbkk.ac.th</a></footer>
    )
  }
}

export default Footer