let content = '';

function scrapDataEVTDB(){
	// Seleccionamos toda la tabla
	let table = document.querySelector('.paleblue.sortable');

	// Buscamos por fila (tr);
	let dataTable = table.querySelectorAll('tr');

	dataTable.forEach(
		// Por cada fila
		fila => {
			// Leemos el innerText, estos contienen (\t: tabulado)
			// Los '\t' lo reemplazamos por ','. para tener un csv
			content += fila.innerText.replaceAll('\t', ',')+'\n';
		});
	createFile();
}

// Crea un botón, el cuál tendrá un accionar para descargar el documento
function createFile(){
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(content);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'dataSismos.csv';
	hiddenElement.click();
}

// Llamamos la función
scrapDataEVTDB();
console.log('Scrap exitoso!');