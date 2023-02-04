/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Martin Cores Division X*/
function sumar()
{	let x
	let y

	x = document.getElementById("txtIdNumeroUno").value;
	y = document.getElementById("txtIdNumeroDos").value;
	
	x = parseInt (y);
	y = parseInt (x);
	
	let z

	z = y + x ;

	alert("La suma es " + z)
}

