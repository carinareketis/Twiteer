const botaoAdicionar = document.querySelector("#adicionar-tweet");
//console.log(botaoAdicionar);

botaoAdicionar.addEventListener("click", function(){
event.preventDefault();
//console.log("oi fui clicado")

const form = document.querySelector("#form-adiciona");
//console.log(form);
//console.log(form.message);
//console.log(form.message.value);

//extrai informações da mensagem do form
getFormMessage(form);
//console.log(message);

//cria a tr e td da mensagem
const messageTr = document.createElement("tr");
//console.log(messageTr);

//adiciona a mensagem na tabela
const tweetTd = document.createElement("td");

tweetTd.textContent = message;

messageTr.appendChild(tweetTd);
//console.log(messageTr);

let table = document.querySelector("#table-posts");

table.appendChild(messageTr);

});

function getFormMessage(form) {
    message = form.message.value;
}


