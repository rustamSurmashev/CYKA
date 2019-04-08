let newThemeEl = document.getElementById('newTheme');
let newQuestionEl = document.getElementById('newQuestion');
let newAnswerEl = document.getElementById('newAnswer');
let newWrongAnswer1El = document.getElementById('newWrongAnswer1');
let newWrongAnswer2El = document.getElementById('newWrongAnswer2');
let newWrongAnswer3El = document.getElementById('newWrongAnswer3');
let newTestEl = document.getElementById('newTest');
newTestEl.addEventListener('click', ()=>{
   let que = 'Вы предложили вопрос по теме ' + newThemeEl.value +'. ' + 'Ваш вопрос: ' + newQuestionEl.value +'. ' +
       'Правильный ответ: ' + newAnswerEl.value +'. ' + 'Неправильные ответы: ' + newWrongAnswer1El.value + ', ' +newWrongAnswer2El.value + ', ' +newWrongAnswer3El.value;
   alert(que);
});