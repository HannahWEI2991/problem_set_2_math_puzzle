function add(){
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  var z = parseInt(x) + parseInt(y);
  var result = document.getElementById("result");
  result.style.fontsize = "25px";
  result.style.color = "red";
  document.getElementById("result").innerHTML = "The result is "+ z;
}

function minus(){
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  var z = parseInt(x) - parseInt(y);
  var result = document.getElementById("result");
  result.style.fontsize = "25px";
  result.style.color = "blue";
  document.getElementById("result").innerHTML = "The result is "+ z;
}

function multiply(){
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  var z = parseInt(x) * parseInt(y);
  var result = document.getElementById("result");
  result.style.fontsize = "25px";
  result.style.color = "green";
  document.getElementById("result").innerHTML = "The result is "+ z;
}

function divide(){
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  var z = parseInt(x) / parseInt(y);
  var result = document.getElementById("result");
  result.style.fontsize = "25px";
  result.style.color = "orange";
  document.getElementById("result").innerHTML = "The result is "+ z;
}
