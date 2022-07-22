import './style.css';
import {
  addScore, submitBtn, refreshBtn, scoreBoard,
} from './score.js';
import { inputName, inputScore } from './leaderboard.js';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (/^[a-zA-Z]*$/gi.test(inputName.value)) {
    addScore();
  } else {
    alert('please use letters for name');
  }
  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', scoreBoard);

document.addEventListener('DOMContentLoaded', scoreBoard);
