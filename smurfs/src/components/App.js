import React, { Component } from "react";
import "./App.css";

import SmurfContextProvider from "../providers/SmurfContextProvider";
import SmurfList from "./SmurfList";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <SmurfContextProvider>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Context</h1>
          <Form />
          <SmurfList />
        </div>
      </SmurfContextProvider>
    );
  }
}

export default App;
