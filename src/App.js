import React, { Component } from "react";
import "./App.css";
import SocialCard from "./component/Social";
import data from "./component/json-test.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="socialContainer">
            {data.map(post => (
              <SocialCard
                background={post.background}
                color={post.color}
                greeting={post.greeting}
                author={post.author}
              />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
