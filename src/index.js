import './style.css';
import {
  addScore, inputName, submitBtn, refreshBtn, scoreBoard,
} from './score.js';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (isNaN(inputName.value)) {   //  eslint-disable-line
    addScore();
  } else {
    alert('please use letters for name');
  }
});

refreshBtn.addEventListener('click', scoreBoard);

document.addEventListener('DOMContentLoaded', scoreBoard);
