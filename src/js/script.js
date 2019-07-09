document.getElementById("newTweet").addEventListener("click", createPost);
document.getElementById("message").addEventListener("input", checkText);

function checkText(event) {
  const counter = document.getElementById("counterText");
  const size = counterTyp(event.target);
  counter.innerHTML = size;
  size > 0 && size <140 ? 
  document.getElementById("newTweet").removeAttribute("disabled") : document.getElementById("newTweet").disabled = "disabled"
  changeColor(size, counter)
  resize(event.target);
}

function changeColor(size, counter) {
  switch(size){
    case 20: case 11:
    counter.className = "yellow counter";
    break;
    case 10: case 1:
    counter.className = "red counter";
    break;
    case 21: case 0:
    counter.className = "blue counter";
    break;
  }
}

function createPost(event) {
  event.preventDefault();
  const message = document.getElementById("message");
  const tweet = document.getElementById("newTweet");
  const counter = document.getElementById("counterText");
  newPost(message);
  renew(message, counter, tweet);
}

function newPost(message) {
  const replaced = /\n/gi;
  const newStr = message.value.replace(replaced, '<br/>');
  document.getElementById("postSection").innerHTML +=  `
  <li>
  <p>${timeNow()}</p>
  <p>${newStr}</p>
  </li>
  `
}

function renew(message, counter, tweet) {
  message.value = "";
  tweet.disabled = "disabled";
  counter.innerHTML= "140";
  counter.className = "blue counter";
}

function resize(box) {
  box.style.height = "auto";
  box.style.height = box.scrollHeight + 'px';
}

function counterTyp(message) {
  return 140 - message.value.length;
}

function timeNow() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
  return new Date().toLocaleDateString('pt-BR', options)
}