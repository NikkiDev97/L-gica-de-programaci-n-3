let button = document.getElementById("resultB");
button.addEventListener("click", calculateFactorial);

function calculateFactorial(){
  let value = document.getElementById("entry").value;
  let resultP = document.getElementById("resultP");

  console.log(parseInt(value));
  console.log(!Number.isInteger(value));
  console.log(isNaN(value));
  console.log(typeof value);
  
  if(isNaN(value) || !Number.isInteger(Number(value)) || parseInt(value) < 1){
    alert("No es posible calcular el factorial de: " + value + "\nPor favor ingrese un número entero positivo");
    //Reseteo
    document.getElementById("entry").value = '';
    //interrumpe la ejecución del codigo restante.
    return;
  }

  factorial = recursiveFactorial(parseInt(value))

  //muestra el resultado
  resultP.innerHTML= "El factorial de " + value + " es: " + factorial;
}

function recursiveFactorial(number){
  if(number == 1){
    return 1
  }
  return number * recursiveFactorial(number-1)
}

