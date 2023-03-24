import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class ExpList extends Component {
    constructor(props){
        super(props)
        this.state = {
            exp: []
        }
    }

    componentDidMount() {
        this.getAllExp()
        document.title = 'Skill List'
    }

    getAllExp(){
        axios.get('http://localhost:5000/information')
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
        axios.delete(`http://localhost:5000/information/delete-experience/${id}`)
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
                <h5>Skill Management</h5>
                <Table striped bordered hover className='App bg-light'> 
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>UML</th>
                            <th>percent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.exp.map((result, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{result.uml_name}</td>
                                <td>{result.percent}</td>
                                <td>
                                    <Link 
                                        className='btn btn-primary sm' 
                                        to={'/admin/edit-experience/'+result._id}>
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
