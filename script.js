var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	input.value.lenght;
	
}

button.addEventListener("click", function(){
	if(input.value.length > 0) {
	var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value = "";
	}
})

input.addEventListener("keypress", function(){
	if(input.value.length > 0 && event.keyCode === 13) {
	var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value = "";
	}
})

