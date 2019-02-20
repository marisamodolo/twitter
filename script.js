document.getElementById("tweet").addEventListener("click", submit);
document.getElementById("message").addEventListener("input", checkText);

function checkText(){
  let size = counter();
  if (size > 0 && size <140) {
    document.getElementById("tweet").removeAttribute("disabled");
    document.getElementById("tweet").style.backgroundColor = "#76A3D0";
    document.getElementById("tweet").style.cursor = 'pointer';
  }else{
    document.getElementById("tweet").style.backgroundColor = "#A4A7AC";
    document.getElementById("tweet").disabled = "disabled";
    document.getElementById("tweet").style.cursor = 'auto';
  }
  changeColor(size)
  resize();
}

function changeColor(size){
  switch(size){
    case 20: case 11:
    document.getElementById("counterText").style.color = "orange";
    break;
    case 10: case 1:
    document.getElementById("counterText").style.color = "red";
    break;
    case 21: case 0:
    document.getElementById("counterText").style.color = "black";
    break;
    }
}

function submit(event){
  event.preventDefault();
  let list = document.createElement("li");
  let postText = document.createElement("p");
  let postTime = document.createElement("p");
  let time = document.createTextNode(timeNow());
  let text = document.createTextNode(document.getElementById("message").value);
  postText.appendChild(time);
  postTime.appendChild(text);
  list.appendChild(postText);
  list.appendChild(postTime);
  document.getElementById("tweets").appendChild(list);
  renew();
}

function renew(){
document.getElementById("message").value = "";
document.getElementById("tweet").style.backgroundColor = "#A4A7AC";
document.getElementById("tweet").disabled = "disabled";
document.getElementById("counterText").innerHTML= "140";
document.getElementById("tweet").style.cursor = 'auto';
}

function resize(){
  let rowTextArea = document.getElementById("message");
  let rows2 = document.getElementById("message").value;
  let numerolinhas = rows2.split('\n').length;
  console.log(numerolinhas);
  console.log(rowTextArea);
  console.log(rowTextArea.offsetHeight);
  console.log(rowTextArea.scrollHeight);

  if(rowTextArea.scrollHeight > rowTextArea.clientHeight){
    console.log("entrou no aumento");
    rowTextArea.rows += 1;
  }else if(rowTextArea.offsetHeight = rowTextArea.clientHeight){
    console.log("entrou no manter");
    rowTextArea.rows = rowTextArea.rows;
  }else if(rowTextArea.clientHeight < rowTextArea.offsetHeight){
    console.log("entrou no diminuir");
    rowTextArea.rows -= 1;
  }else if(rowTextArea.rows = rowTextArea.offsetHeight){
    rowTextArea.rows = 6;
  }
}

function counter(){
  let msg = document.getElementById("message").value;
  let size = 140 - msg.length;
  document.getElementById("counterText").innerHTML= size;
  return size;
}

function timeNow(){
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();
  let hora = data.getHours();
  let min = data.getMinutes(); 
  dia < 10 ? dia= "0" + dia : dia = dia ;
  hora < 10 ? hora = "0" + hora : hora = hora ;
  min < 10 ? min = "0" + min : min = min ;
  let monthList = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
  const result = hora + ":" + min + " - " + dia + " " + monthList[mes] +" " + ano;
  return result;
}