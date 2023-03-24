import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class WorkList extends Component {
    constructor(props){
        super(props)
        this.state = {
            exp: []
        }
    }

    componentDidMount() {
        this.getAllExp()
        document.title = 'Experience List'
    }

    getAllExp(){
        axios.get('http://localhost:3000/work')
        .then(result => {
            this.setState({
                exp: result.data
            }) 
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteExp = (id) => {
        axios.delete(`http://localhost:3000/work/delete-work/${id}`)
        .then(result =>{
            this.getAllExp()
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <h5>Experience Management</h5>
                <Table striped bordered hover className='App bg-light'> 
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>description</th>
                            <th>Github URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.exp.map((result, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{result.name}</td>
                                <td>{result.description}</td>
                                <td>{result.github_url}</td>
                                <td>
                                    <Link 
                                        className='btn btn-primary sm' 
                                        to={'/admin/edit-work/'+result._id}>
                                            Edit
                                    </Link>{' '}
                                    <Button className='btn btn-danger sm' onClick={() => {
                                        window.confirm('Are you sure to delete this item?') && this.deleteExp(result._id)
                                    }}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
