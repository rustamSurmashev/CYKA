let confirmButtonEl = document.getElementById("confirmButton");
let modal = document.querySelector("#modal");
let modalOverlay = document.querySelector("#modal-overlay");
let closeButton = document.querySelector("#close-button");

confirmButtonEl.addEventListener('click', () => {
    //TODO: Валидация формы
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});
closeButton.addEventListener("click", function(){
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});
