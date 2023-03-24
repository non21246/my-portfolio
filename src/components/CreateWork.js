import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/withRouter'

class CreateWork extends Component {
  constructor(props){
    super(props) 

    this.state = {
      name: '',
      description: '',
      github_url: '',
    }
  }

  componentDidMount(){
    document.title = 'Create Experience'
  }
  
  onChangeName = (e) => {
    this.setState({name: e.target.value})
  }

  onChangeDes = (e) => {
    this.setState({description: e.target.value})
  }

  onChangeGithubURL = (e) => {
    this.setState({github_url: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    
    const workInf = {
      name: this.state.name,
      description: this.state.description,
      github_url: this.state.github_url,
    }

    axios.post('http://localhost:3000/work/create-work', workInf)
    .then(result => {
      console.log(result.data)
      this.props.router.navigate('/admin/work-list')
      
    })
    .catch(error => {
      console.log(error)
    })

    this.setState({
      name: '',
      description: '',
      github_url: '',
    })
  }
  
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' value={this.state.name} onChange={this.onChangeName}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' value={this.state.description} onChange={this.onChangeDes}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Github URL</Form.Label>
            <Form.Control type='text' value={this.state.github_url} onChange={this.onChangeGithubURL}/>
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

export default withRouter(CreateWork)