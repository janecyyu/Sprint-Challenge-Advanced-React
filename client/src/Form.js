import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";

export const Form = () => {
  const [player, setPlayer, handlePlayerChanges] = useLocalStorage("player");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayer("");
    axios
      .get(`http://localhost:5000/api/players`)
      .then((response) => {
        //console.log(response.data[0].name)
        const list = [];
        response.data.map((person) => {
          list.push(person.name);
        });
        //console.log(list);
        if (list.includes(player)) {
          alert("yes");
        } else {
          alert("sorry, not found");
        }
      })
      .catch((error) => console.log("error: " + error));
  };
  return (
    <div className="Wrapper">
      <form onSubmit={handleSubmit}>
        <div className="Input">
          <label htmlFor="input">Enter Player's Full Name: </label>
            <input
              data-testid="input"
              className="Input-text"
              id="input"
              name="inputText"
              onChange={handlePlayerChanges}
              placeholder="Enter Player's Full Name"
              type="text"
              value={player}
            />
          
          <button data-testid="submit">Check if exist</button>
        </div>
      </form>
    </div>
  );
};
