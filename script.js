document.getElementById("tweet").addEventListener("click", submit);

function checkText(){
    if(document.getElementById("message").value !== ""){
        document.getElementById("tweet").removeAttribute("disabled");
    }else{
        document.getElementById("tweet").disabled = "disabled";
    }
    counter();
}
function submit(event){
    event.preventDefault();
    document.getElementById("result").innerHTML = document.getElementById("message").value;
    document.getElementById("message").value = "";
    document.getElementById("tweet").disabled = "disabled";
    document.getElementById("counterText").innerHTML= "";
}

function counter(){
    let x = document.getElementById("message").value;
    let y = 140 - x.length;
    document.getElementById("counterText").innerHTML= y;

}