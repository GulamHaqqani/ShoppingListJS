var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("Delete");
var items = ul.getElementsByClassNameByTagName("li");


for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(evt){
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();

}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.scrElement;
}

ul.onclick = function(event){
	var target =getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListItem(){

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);