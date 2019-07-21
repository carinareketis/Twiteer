const botaoAdicionar = document.querySelector("#adicionar-tweet");

botaoAdicionar.addEventListener("click", function(){
event.preventDefault();

const form = document.querySelector("#form-adiciona");

getFormMessage(form);

const messageTr = document.createElement("tr");

const tweetTd = document.createElement("td");

tweetTd.textContent = message;

messageTr.appendChild(tweetTd);

let table = document.querySelector("#table-posts");

table.appendChild(messageTr);

});

function getFormMessage(form) {
    message = form.message.value;
}


