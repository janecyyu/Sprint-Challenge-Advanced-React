import React from "react";
import "./App.css";
import axios from "axios";



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
        <h1>my App</h1>
        <div className="Wrapper">
          <form>
            <div className="Input">
              <input
                className="Input-text"
                id="input"
                name="inputText"
                // onChange={handleChanges}
                placeholder="Enter Player's Name"
                type="text"
                // value={inputText}
              />
              <label htmlFor="input" className="Input-label">
                Looking for Id
              </label>
            </div>
          </form>
        </div>
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
