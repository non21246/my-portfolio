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
        document.title = 'About'
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
                <div className='row text-ml'>
                    <div className='col-lg-5 col-md-12 col-sm-12 mt-2 slide-in-top'>
                        <h1 className='text-center'>Skill</h1>
                            <p></p>
                        {
                        this.state.information.map((result, index) => (
                            <ul>
                                <li>{result.uml_name}</li>
                                <ProgressBar variant='warning' animated now={result.percent} label={`${result.percent}%`}/>
                            </ul>
                        ))}
                    </div >
                    <div className='col-lg-2 col-md-12 col-sm-12 pt-2'>
                        {' '}
                    </div>
                    <div className='col-lg-5 col-md-12 col-sm-12 pt-2'>
                        <div className='slide-in-buttom'>
                            <h1 className='text-center'>About me</h1>
                            <p></p>
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
