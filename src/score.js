import { saveUser, getUser } from "./leaderboard.js"

const scoreList = document.querySelector('.score-list');
const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const submitBtn = document.querySelector('.submit');
const refreshBtn = document.querySelector('.refresh');

const scoreBoard = async () => {
  let users = await getUser();
  users.result.sort(function(a,b){return a.score-b.score});
  scoreList.innerText = '';
  users.result.forEach((user) => {
    const score = document.createElement('li');
    score.innerText = `${user.user} : ${user.score}`;
    scoreList.appendChild(score);
  })
};

const addScore = async () => {
  if (inputName.value === '' || inputScore.value === '') return;
  saveUser();
};

export {
  addScore, scoreBoard, inputName, inputScore, submitBtn, scoreList, refreshBtn
};