import { inputName, inputScore } from "./score.js";

const createGame = async () => {
  let response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ 
      "name": "My cool new game" 
    })
  });
  let result = await response.json();
  return result;
};

const saveUser = async () => {
  let response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/l5QIGSIjQHwO14ZBpgj0/scores/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      "user": inputName.value,
      "score": inputScore.value
    })
  });
  let data = await response.json();
  return data;
};

const getUser = async ()=> {
  let response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/l5QIGSIjQHwO14ZBpgj0/scores/");
  try {
    let data = await response.json();
    return data;
  }
  catch(error){
    console.log(error);
  }
};

export { saveUser, getUser }