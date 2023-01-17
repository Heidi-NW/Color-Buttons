function addColor(color) {
    var list = document.getElementById("color-list");
    var item = document.createElement("li");
    item.innerHTML = color;
    list.appendChild(item);
  }

  function clearList() {
    var list = document.getElementById("color-list");
    list.innerHTML = "";
}

var colorHistory = [];

function goBack() {
    var list = document.getElementById("color-list");
    var lastColor = colorHistory.pop();
    if (lastColor) {
        list.removeChild(list.lastChild);
    }
}

function addColor(color) {
    var list = document.getElementById("color-list");
    var item = document.createElement("li");
    item.innerHTML = color;
    list.appendChild(item);
    colorHistory.push(color);
  }