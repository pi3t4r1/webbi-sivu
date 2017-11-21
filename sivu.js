
function setphoto(id, kuvanNimi) {
	console.log("terve")
	let element = document.getElementById(id);
	element.style.display = "inline-block";
	element.src = kuvanNimi;
}

function hideElement(id) {
	
	document.getElementById(id).style.display = "none";
}
