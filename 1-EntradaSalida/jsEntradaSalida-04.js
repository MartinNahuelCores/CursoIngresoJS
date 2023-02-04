/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Martin Cores Division X*/
function mostrar()
{
	let nombreIngresado;

	nombreIngresado = prompt("Ingrese su Nombre");

	document.getElementById("txtIdNombre").value = nombreIngresado;

	alert(nombreIngresado)

}

