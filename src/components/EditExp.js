import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/withRouter'

class EditExp extends Component {
  constructor(props){
    super(props)

    this.state = {
      uml_name: '',
      percent: ''
    }
  }

  componentDidMount() {
    document.title = 'Edit Skill'
    axios.get(`http://localhost:5000/information/edit-experience/${this.props.router.params.id}`)
    .then(result => {
        this.setState({
          uml_name: result.data.uml_name,
          percent: result.data.percent
        })
    })
    .catch(error => {
        console.log(error)
  })
}

onChangeUMLName = (e) => {
  this.setState({uml_name: e.target.value})
}

onChangePercent = (e) => {
  this.setState({percent: e.target.value})
}

  onSubmit = (e) => {
    e.preventDefault()
    
    const workInf = {
      uml_name: this.state.uml_name,
      percent: this.state.percent
    }

    axios.put(`http://localhost:5000/information/update-experience/${this.props.router.params.id}`, workInf)
    .then(result => {
      console.log(result.data)
      this.props.router.navigate('/admin/experience-list')
    })
    .catch(error => {
      console.log(error)
    })

    this.setState({
      uml_name: '',
      percent: ''
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
              Update
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(EditExp)