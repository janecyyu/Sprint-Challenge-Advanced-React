import { useState } from "react";

export const useLocalStorage = (key) => {
  const [player, setPlayer] = useState(window.localStorage.getItem(key));
  const handlePlayerChanges = (e) => {
    window.localStorage.setItem(key, e.target.value);
    setPlayer(e.target.value);
  };
  return [player,setPlayer, handlePlayerChanges];
};
