var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("js-pjax-loader-bar");
element.appendChild(para);