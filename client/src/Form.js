import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";

export const Form = () => {
  const [id, setId] = useState("");
  const [player, setPlayer, handlePlayerChanges] = useLocalStorage("player");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayer("");
    axios
      .get(`http://localhost:5000/api/players`)
      .then((response) => {
        //console.log(response.data[0].name)
        response.data.map(person=>{
            if(person.name===player){
                alert(person.id);
            }
        })
      })
      .catch((error) => console.log("error: " + error));
  };
  return (
    <div className="Wrapper">
      <form onSubmit={handleSubmit}>
        <div className="Input">
          <input
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handlePlayerChanges}
            placeholder="Enter Player's Name"
            type="text"
            value={player}
          />
          <button>Looking for Id</button>
        </div>
      </form>
    </div>
  );
};
