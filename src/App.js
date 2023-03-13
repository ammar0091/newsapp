import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Home from './Components/Home';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_APP
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f111246'
            progress={this.state.progress}
          />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home setProgress={this.setProgress} apikey={this.apikey} key='general' country='in' category='general' />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key='science' country='in' category='science' />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key='health' country='in' category='health' />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key='sports' country='in' category='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key='technology' country='in' category='technology'/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key='business' country='in' category='business'/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key='entertainment' country='in' category='entertainment'/>}></Route>
          </Routes>

        </Router>

      </div>
    )
  }
}

