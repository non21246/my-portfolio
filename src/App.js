import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Admin from './components/Admin';
import EditExp from './components/EditExp';
import EditWork from './components/EditWork';
import ExpList from './components/ExpList';
import WorkList from './components/WorkList';
import CreateExp from './components/CreateExp';
import CreateWork from './components/CreateWork';
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
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/create-experience' element={<CreateExp />} />
            <Route path='/admin/create-work' element={<CreateWork/>} />
            <Route path='/admin/experience-list' element={<ExpList />} />
            <Route path='/admin/work-list' element={<WorkList />} />
            <Route path='/admin/edit-experience/:id' element={<EditExp />} />
            <Route path='/admin/edit-work/:id' element={<EditWork />} />
          </Routes>
        </div>
        <Footer className='footer'/>
      </>
    );
  }
}


