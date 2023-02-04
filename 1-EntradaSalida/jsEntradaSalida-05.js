/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Martin Cores Division X	*/
function mostrar()
{	
	let edad 
	let nombre

	edad = document.getElementById("txtIdEdad").value
	nombre= document.getElementById("txtIdNombre").value

	alert("Usted se llama " + nombre + " y tiene " + edad + " años de edad");
}

