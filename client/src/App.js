import React from "react";
import "./App.css";
import axios from "axios";
import {Form} from './Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      country: "",
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => console.log("error" + error));
  }

  render() {
    //console.log(this.state.data);

    return (
      <div className="App">
        <h1>Player List</h1>
       <Form />
        <div className="player">
          {this.state.data.map((person) => (
            <ul>
              <li>{person.name}</li>
              <li>{person.country}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
