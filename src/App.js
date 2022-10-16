import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import React, { Component } from 'react'
import NevBar from './components/NevBar';
import News from './components/News'; 
import Login from './components/Login';
import Signup from './components/Signup';

export default class App extends Component {
  
  render() {
    return (
      <>
      <NevBar/>
      <div className='container'>
     
       <Router>
            <Routes>
                <Route path='/'   element={<News pageSize={5} country="in" category="general"/>}/>
                <Route path='/Business'element={<News pageSize={5} country="in" category="Business"/>}/>
                <Route path='/Entertainment'element={<News pageSize={5} country="in" category="Entertainment"/>}/>
                <Route path='/General'element={<News pageSize={5} country="in" category="General"/>}/>
                <Route path='/Health'element={<News pageSize={5} country="in" category="Health"/>}/>
                <Route path='/Science'element={<News pageSize={5} country="in" category="Science"/>}/>
                <Route path='/Sports'element={<News pageSize={5} country="in" category="sports"/>}/>
                <Route path='/Technology'element={<News pageSize={5} country="in" category="Technology"/>}/>
                <Route path='/Login'   element={<Login/>}/>
                <Route path='/Signup'   element={<Signup/>}/>
            </Routes>
        </Router>
      </div>
      </>
    )
  }
}

