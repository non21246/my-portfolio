import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import axios from 'axios'

export default class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            information: []
        }
    }

    componentDidMount() {
        this.getAllExperience()
    }

    getAllExperience(){
        axios.get('http://localhost:5000/information/')
        .then(result => {
            this.setState({
                information: result.data
            }) 
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className='App-header'>
                <h1 className='text-center'>About me</h1>
                <div className='row text-ml'>
                    <div className='col-lg-5 col-md-12 col-sm-12 mt-2'>
                        {
                        this.state.information.map((result, index) => (
                            <ul>
                                <li>{result.uml_name}</li>
                                <ProgressBar variant='warning' animated now={result.percent} label={`${result.percent}%`}/>
                            </ul>
                        ))}
                    </div >
                    <div className='col-lg-7 col-md-12 col-sm-12 pt-2'>
                        <div className='slide-in-buttom '>
                            <p>Firstname : Turanon</p>
                            <p>Lastname : Hothong</p>
                            <p>Role : Student</p>
                            <p>Studying : North Bangkok University</p>
                            <p>Hobby : Play games, Watch youtube</p>
                        </div >
                    </div >
                </div>
            </div>
        )
    }
}
