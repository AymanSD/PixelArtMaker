// Select color input

const clr = document.querySelector('#colorPicker');

function changeColour(){
	return clr.value;
}

// When size is submitted by the user, call makeGrid()
document.querySelector('#formSubmit').addEventListener('click', makeGrid)

function makeGrid(evt) {
	
  // Select size input
var h = document.querySelector('#inputHeight').valueAsNumber;	// table height
var w = document.querySelector('#inputWidth').valueAsNumber;	// table width

	const tbl = document.getElementById('pixelCanvas'); // Storing the table element
	
	const tblRaw = document.querySelectorAll('tr')		//Selecting Existing table raws
	
	//The following loop will remove the existing table
    
    tbl.innerHTML="";

	evt.preventDefault();

// Creating the table cells:

	for (let i = 1; i <= h; i++){
		const tableRaws = document.createElement('tr');
		tbl.appendChild(tableRaws);
		for (let j = 1; j <= w; j++){
			const tableColumns = document.createElement('td');
			tableRaws.appendChild(tableColumns);
		}
	}
}
// Colouring each cell
const cell = document.addEventListener('click', function(slctCell){
	 if (slctCell.target.nodeName.toLowerCase() === 'td'){
		 slctCell.target.style.backgroundColor = changeColour();
		} else {
		}
	 })
