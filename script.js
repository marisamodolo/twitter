document.getElementById("tweet").addEventListener("click", submit);

function checkText(){
  let size = counter();
  if(size > 0 && size <140 ){
    document.getElementById("tweet").removeAttribute("disabled");
  }else{
    document.getElementById("tweet").disabled = "disabled";
  }
}

function submit(event){
  event.preventDefault();
  var lista = document.createElement("li");
  var para = document.createElement("p");
  var t = document.createTextNode(document.getElementById("message").value);
  para.appendChild(t);
  lista.appendChild(para);
  document.getElementById("tweets").appendChild(lista);
  document.getElementById("message").value = "";
  document.getElementById("tweet").disabled = "disabled";
  document.getElementById("counterText").innerHTML= "";
}

function counter(){
  let msg = document.getElementById("message").value;
  let size = 140 - msg.length;
  document.getElementById("counterText").innerHTML= size;
  return size;
}