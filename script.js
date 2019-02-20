let tweet = document.getElementById("newTweet");
let counter = document.getElementById("counterText");
let message = document.getElementById("message");
tweet.addEventListener("click", newPost);
document.getElementById("message").addEventListener("input", checkText);


function checkText(){
  let size = counterTyp();
  if (size > 0 && size <140) {
    tweet.removeAttribute("disabled");
    tweet.style.backgroundColor = "#76A3D0";
    tweet.style.cursor = 'pointer';
  }else{
    tweet.style.backgroundColor = "#A4A7AC";
    tweet.disabled = "disabled";
    tweet.style.cursor = 'auto';
  }
  changeColor(size)
  resize();
}

function changeColor(size){
  switch(size){
    case 20: case 11:
    counter.style.color = "orange";
    break;
    case 10: case 1:
    counter.style.color = "red";
    break;
    case 21: case 0:
    counter.style.color = "black";
    break;
  }
}

function newPost(event){
  event.preventDefault();
  let list = document.createElement("li");
  let postText = document.createElement("p");
  let postTime = document.createElement("p");
  postText.textContent= message.value;
  postTime.textContent = timeNow();
  list.appendChild(postTime);
  list.appendChild(postText);
  document.getElementById("postSection").appendChild(list);
  renew();
}

function renew(){
  message.value = "";
  tweet.style.backgroundColor = "#A4A7AC";
  tweet.disabled = "disabled";
  counter.innerHTML= "140";
  tweet.style.cursor = 'auto';
  message.style.height = "auto";
  counter.style.color = "black";
}

function resize(){
  message.style.height = "auto";
  message.style.height = message.scrollHeight + 'px';
}

function counterTyp(){
  counter.innerHTML = 140 - message.value.length;
  return 140 - message.value.length;
}

function timeNow(){
  let data = new Date();
  let day = data.getDate();
  let hour = data.getHours();
  let min = data.getMinutes(); 
  day < 10 ? day= "0" + day : day = day ;
  hour < 10 ? hour = "0" + hour : hour = hour ;
  min < 10 ? min = "0" + min : min = min ;
  let monthList = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
  const result = hour + ":" + min + " - " + day + " " + monthList[data.getMonth()] +" " + data.getFullYear();
  return result;
}