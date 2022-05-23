function emailchk() {
var x = document.contactar.email.value
if (x.indexOf("@")==-1)
{
	alert("Parece que ingresó una dirección de correo electrónico no válida")
	document.feedback.email.focus()
}
}