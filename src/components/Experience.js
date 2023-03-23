import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'

export default class Experience extends Component {
    constructor(props){
        super(props)
        this.state = {
            work: []
        }
    }

    componentDidMount() {
        this.getAllWork()
    }

    getAllWork(){
        axios.get('http://localhost:3000/work')
        .then(result => {
            this.setState({
                work: result.data
            }) 
        })
        .catch((error) => {
            console.log(error)
        })
    }

  
  render() {
    return (
        <div className='App-header'>
            {this.state.work.map((result, index) => (
              <Card className='color-text mb-3' style={{ width: '14rem'}}>
                  <Card.Img variant="top" src="./logo192.png" />
                  <Card.Body>
                  <Card.Title>{result.name}</Card.Title>
                  <Card.Text>
                      {result.description}
                  </Card.Text>
                  <Button className='text-center d-grid gap-2' href={result.github_url} variant="primary">Github</Button>
                  </Card.Body>
              </Card>
            ))}
        </div>
    )
  }
}
