import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class Admin extends Component {
  componentDidMount(){
    document.title = 'Admin'
  }
  
  render() {
    return (
      <div className='text-center'>
        <Button><NavLink to='/admin/create-experience' className='text-white fs-1'>Create Skill</NavLink></Button><p></p>
        <Button><NavLink to='/admin/experience-list' className='text-white fs-1'>Skill List</NavLink></Button><p></p>
        <Button><NavLink to='/admin/create-work' className='text-white fs-1'>Create Experience</NavLink></Button><p></p>
        <Button><NavLink to='/admin/work-list' className='text-white fs-1'>Experience List</NavLink></Button><p></p>
      </div>
    )
  }
}
