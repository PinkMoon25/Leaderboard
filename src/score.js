import {
  saveUser, getUser, inputName, inputScore,
} from './leaderboard.js';

const scoreList = document.querySelector('.score-list');
const submitBtn = document.querySelector('.submit');
const refreshBtn = document.querySelector('.refresh');

const scoreBoard = async () => {
  const users = await getUser();
  users.result.sort((a, b) => b.score - a.score);
  scoreList.innerText = '';
  users.result.forEach((user) => {
    const score = document.createElement('li');
    score.innerText = `${user.user} : ${user.score}`;
    scoreList.appendChild(score);
  });
};

const addScore = async () => {
  if (inputName.value === '' || inputScore.value === '') return;
  saveUser();
};

export {
  addScore, scoreBoard, submitBtn, scoreList, refreshBtn,
};