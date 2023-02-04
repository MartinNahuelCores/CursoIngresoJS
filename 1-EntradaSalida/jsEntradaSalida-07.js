/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Martin Cores Division X*/ 
function sumar()
{	
	let primerCifra
	let segundaCifra
	let resultado
	primerCifra = document.getElementById("txtIdNumeroUno").value
	segundaCifra = document.getElementById("txtIdNumeroDos").value

	primerCifra = parseInt(primerCifra)
	segundaCifra = parseInt(segundaCifra)
	resultado = primerCifra + segundaCifra
 
	alert("La suma es " + resultado);	
}

function restar()
{
	let primerCifra
	let segundaCifra

	primerCifra = document.getElementById("txtIdNumeroUno").value
	segundaCifra = document.getElementById("txtIdNumeroDos").value

	primerCifra = parseInt(primerCifra)
	segundaCifra = parseInt(segundaCifra)

	let resultado

 	resultado = primerCifra - segundaCifra
 
	alert("La resta es " + resultado);	
}


function multiplicar()
{ 
	let primerCifra
	let segundaCifra

	primerCifra = document.getElementById("txtIdNumeroUno").value
	segundaCifra = document.getElementById("txtIdNumeroDos").value

	primerCifra = parseInt(primerCifra)
	segundaCifra = parseInt(segundaCifra)

	let resultado

 	resultado = primerCifra * segundaCifra
 
	alert("La multiplicacion es " + resultado);
}

function dividir()
{
	let primerCifra
	let segundaCifra

	primerCifra = document.getElementById("txtIdNumeroUno").value
	segundaCifra = document.getElementById("txtIdNumeroDos").value

	primerCifra = parseInt(primerCifra)
	segundaCifra = parseInt(segundaCifra)

	let resultado

 	resultado = primerCifra / segundaCifra
 
	alert("La division es " + resultado);
}

