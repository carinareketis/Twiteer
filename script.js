const input = document.querySelector('input'),

textarea = document.querySelector('textarea');

input.disabled = true

textarea.addEventListener('keyup', caracteres);


function caracteres() {
    var current = document.getElementById('message').value.length;
    let valor = 140 - current;
    document.getElementById('cont').innerHTML = valor;
    console.log(valor) 
    if (valor === 140) {
        document.getElementById('adicionar-tweet').disabled = true;

    } else if (valor < 0) {
            document.getElementById('cont').style.color = 'red';
            document.getElementById('adicionar-tweet').disabled = true;

    } else if (valor < 10) {
            document.getElementById('cont').style.color = 'red';
            document.getElementById('adicionar-tweet').disabled = false;

    } else if (valor < 20) {
        document.getElementById('cont').style.color = 'yellow';
        document.getElementById('adicionar-tweet').disabled = false;

    } else if (valor < 140) {
        document.getElementById('cont').style.color = 'black';
        document.getElementById('adicionar-tweet').disabled = false;    
    }
}

input.addEventListener('click', function time() {
    today=new Date();
    h=today.getHours();
    m=today.getMinutes();
    document.getElementById('txt').innerHTML=h+":"+m;
    setTimeout('time()',500);
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

