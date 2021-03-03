// adding a new item to the list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.setAttribute("onclick", "remove(this)");
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    
    }
}
function remove(element) {
    var element = element;
    element.style.setProperty("text-decoration", "line-through");
    setTimeout(function() {
        element.remove()},
        500);
    }
