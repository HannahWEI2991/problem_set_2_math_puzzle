function add(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);
  document.getElementById("result").value = x + y;
}

function minus(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);
  document.getElementById("result").value = x - y;
}

function multiply(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);
  document.getElementById("result").value = x * y;
}

function divide(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);
  document.getElementById("result").value = x / y;
}
