import "./style.css";
import { addScore, inputName, inputScore, submitBtn } from "./score.js";

addScore();

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  if(isNaN(inputName.value)) {
    addScore();
  }
  else {
    alert('please use letters for name');
    return;
  }
});