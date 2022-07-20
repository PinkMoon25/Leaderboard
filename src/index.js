import './style.css';
import {
  addScore, inputName, submitBtn,
} from './score.js';

addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (isNaN(inputName.value)) {   //  eslint-disable-line
    addScore();
  } else {
    alert('please use letters for name');
  }
});