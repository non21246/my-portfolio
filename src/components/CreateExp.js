import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/withRouter'

class CreateExp extends Component {
  constructor(props){
    super(props) 

    this.state = {
      uml_name: '',
      percent: '',
    }
  }

  componentDidMount(){
    document.title = 'Create Skill'
  }
  
  onChangeUMLName = (e) => {
    this.setState({uml_name: e.target.value})
  }

  onChangePercent = (e) => {
    this.setState({percent: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    
    const skillInf = {
      uml_name: this.state.uml_name,
      percent: this.state.percent,
    }

    axios.post('http://localhost:5000/information/create-experience', skillInf)
    .then(result => {
      console.log(result.data)
      this.props.router.navigate('/admin/experience-list')
      
    })
    .catch(error => {
      console.log(error)
    })

    this.setState({
      uml_name: '',
      percent: '',
    })
  }
  
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>UML</Form.Label>
            <Form.Control type='text' value={this.state.uml_name} onChange={this.onChangeUMLName}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>percent</Form.Label>
            <Form.Control type='text' value={this.state.percent} onChange={this.onChangePercent}/>
          </Form.Group>
          <Form.Group className='text-center mt-3 d-grid gap-2'>
            <Button variant='outline-light' type='submit' size='md'>
              Create
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateExp)