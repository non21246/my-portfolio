import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  render(){
    return (
      <>
        <MenuBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/experience' element={<Experience />}/>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer className='footer'/>
      </>
    );
  }
}


