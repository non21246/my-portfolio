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
        document.title = 'Experience'
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
        <div className='slide-in-buttom'>
            <h1 className='text-center'>Experience</h1>
            <div className='d-flex'>
                {this.state.work.map((result, index) => (
                    <Card className='color-text m-2' style={{ width: '14rem'}}>
                        <Card.Img variant="top" src="./img/experience.jpg" />
                        <Card.Body>
                        <Card.Title>{result.name}</Card.Title>
                        <Card.Text>
                            {result.description}
                        </Card.Text>
                        <Button className='text-center d-grid gap-2' href={result.github_url} target="_blank" rel="noopener" variant="primary">Github</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
  }
}
