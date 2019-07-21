document.getElementById('btn-login').addEventListener('click', login);
document.getElementById('message').addEventListener('keyup', disabledButton);
document.getElementById('message').addEventListener('keydown', autoSize);
document.getElementById('message').addEventListener('keyup', changeColor);
document.getElementById('btn-tweet').addEventListener('click', insertTweet);

document.getElementById("btn-tweet").disabled = true;

function login() {
    let name = document.getElementById('name').value;
    document.getElementById('print-user').innerHTML = name;
    document.getElementById('hide-session').style.display = 'none'; this.style.display = 'none';
}

function disabledButton() {
    let message = document.getElementById('message').value.length;

    if (message <= 0 || message > 140) {
        document.getElementById('btn-tweet').disabled = true;
    } else {
        document.getElementById('btn-tweet').disabled = false;
    }
}

function autoSize() {
    let textarea = document.getElementById('message');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + "px";
}

function changeColor() {
    const message = document.getElementById('message').value.length;

    let strMax = 140;
    let strLength = strMax - message;

    if (strLength >= 21) {
        document.getElementById('color').style.color = 'black';
    }
    if (strLength <= 20) {
        document.getElementById('color').style.color = 'yellow';
    }
    if (strLength <= 10) {
        document.getElementById('color').style.color = 'red';
    }

    document.getElementById('color').innerHTML = strLength;
}

function insertTweet() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');
    const date = insertDate();
    const posts = document.getElementById('add-posts');
    const content = message.value.split('\n').join('<br/>');
    const addPost = document.getElementById('btn-tweet');
    const template =
        `<div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                  <figure class="mr-2">
                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                  </figure>
                  <article class="ml-2">
                    <h5 class="h5 m-0">${name}</h5>
                  </article>
                </div>
              </div>
            </div>
            <div class="card gedf-card">
                <article class="card-body">
                    <div class="text-muted h7 mb-2" id="date"><i class="fa fa-clock-o">${date}</i></div>
                    <p class="card-text">${content}</p>
                </article>
            </div>
        </div>`;
    posts.innerHTML = template + posts.innerHTML;
    message.value = "";
    addPost.setAttribute('disabled', 'disabled');
}

function insertDate() {
    let date = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} - ${day} ${month} ${year}`;
}



