let userNameEl = document.getElementById("userName");
let cardCodeEl = document.getElementById("cardCode");
let expDateEl = document.getElementById("expDate");
let cvcCodeEl = document.getElementById("cvcCode");
let confirmButtonEl = document.getElementById("confirmButton");
//Поле ввода имени
userNameEl.addEventListener('keypress',  (e) => {
    // let userName = this.value.replace (/[^\D]/g, '');
    // this.value = userName;

    let val = userNameEl.value + userNameEl.key;
    if(val.split(" ").length === 3) {
        e.preventDefault();
    }
});

//Поле ввода номера карты
cardCodeEl.addEventListener('input', formatCardCode, false);
function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
    // cardForm.number.value=this.value.split(" ").join("");
}

//Поле ввода даты
expDateEl.addEventListener('input', formatExpDate, false);
function formatExpDate() {
    // let expDate = this.value.replace (/[^\d]/g, '');
    let expDate = this.value;
    if(expDate.length === 2 && !expDate.includes('/')){
        expDate += '/';
        console.log(expDate);
    }
    this.value = expDate;
}

//Поле ввода cvc

cvcCodeEl.addEventListener('input', formatCvcCode, false);

function formatCvcCode() {
    this.value = this.value.replace (/[^\d]/g, '');
}


//Отправить форму

confirmButtonEl.addEventListener('click', () => {

    //TODO: Валидация формы

    alert("Спасибо!");
});