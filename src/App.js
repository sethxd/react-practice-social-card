import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialCard from './component/Social';
import data from './component/json-test.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="socialContainer">
          {data.map((post, key) =>
            <SocialCard background={post.background} color={post.color} greeting={post.greeting} author={post.author} key={post.greeting} />
          )}
          </div>
        </header>

      </div>
    );
  }
}

export default App;
