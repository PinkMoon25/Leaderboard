const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');

async function createGame () {  //eslint-disable-line
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      name: 'My cool new game',
    }),
  });
  const result = await response.json();
  return result;
}

const saveUser = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1NSTE2sLOVXpC9HsVA1G/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user: inputName.value,
      score: inputScore.value,
    }),
  });
  const data = await response.json();
  return data;
};

const getUser = async () => {   //eslint-disable-line
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1NSTE2sLOVXpC9HsVA1G/scores/');
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  saveUser, getUser, inputName, inputScore,
};