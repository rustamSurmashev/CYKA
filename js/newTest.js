let newThemeEl = document.getElementById('newTheme');
let newSubThemeEl = document.getElementById('newSubTheme');
let newQuestionEl = document.getElementById('newQuestion');
let newAnswerEl = document.getElementById('newAnswer');
let newWrongAnswer1El = document.getElementById('newWrongAnswer1');
let newWrongAnswer2El = document.getElementById('newWrongAnswer2');
let newWrongAnswer3El = document.getElementById('newWrongAnswer3');
let confirmButtonEl = document.getElementById('confirmButton');
class Question {
   constructor (theme, subtheme, question, answer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
      this.theme = theme;
      this.subtheme = subtheme;
      this.question = question;
      this.answer = answer;
      this.wrongAnswer1 = wrongAnswer1;
      this.wrongAnswer2 = wrongAnswer2;
      this.wrongAnswer3 = wrongAnswer3;
   }};

confirmButtonEl.addEventListener('click', ()=>{
let questionForCheck = new Question(newThemeEl.value, newSubThemeEl.value, newQuestionEl.value, newAnswerEl.value, newWrongAnswer1El.value, newWrongAnswer2El.value, newWrongAnswer3El.value);
console.log(questionForCheck);
});
