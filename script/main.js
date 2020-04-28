var numberPool = new Array();
var numberPoolIndex = 0;

function printSdkField( fieldNbr ){
	var table = document.createElement("table");
	generateNumberPool();
	for(var rIndex = 0; rIndex < 3; rIndex++) {
		var row = document.createElement("tr");
		for (var cIndex = 0; cIndex < 3; cIndex++) {
			var cell = document.createElement("td");
			cell.id = "g"+fieldNbr+"r"+rIndex+"c"+cIndex;
			row.appendChild(cell);
		}
		if (fieldNbr%2)
			table.style.backgroundColor = "lightgrey";
		
		table.appendChild(row);
	}
	return table;
}

function printSdkGame(){
	var game = document.createElement("table");
	game.id = "sdkGame";
	for (var i = 0; i < 3; i++) {
		var row = document.createElement("tr");
		for(var j = 0; j < 3; j++)
			row.appendChild(printSdkField(i*3+j));
		row.classList.add("sdkRow");
		game.appendChild(row);
	}
	document.getElementById("gameview").appendChild(game);
}

function generateNumberPool() {
	for ( var i = 0 ; i <= 81 ; i++ ) numberPool[i] = parseInt(i / 9) + 1;
}

function pickNumberOutPool(){
	var nbr;
	if (numberPoolIndex >= 81) return null;
	nbr = numberPool[numberPoolIndex];
	numberPool[numberPoolIndex] = null;
	numberPoolIndex++;
	return nbr;
}

function returnRow(IDgroup, IDrow) {
	var rowOffset;
	if (IDgroup < 3) rowOffset = 0;
	else if (IDgroup < 6) rowOffset=3;
	else rowOffset = 6;
	return rowOffset + IDrow + 1;
}

function returnCol(IDgroup, IDcell) {
	var cellOffset;
	if (!IDgroup%3) cellOffset = 0;
	else if (IDgroup%3 == 1) cellOffset = 3;
	else cellOffset = 6;
	return IDcell + cellOffset + 1;
}

function returnGroup(row,cell) {
	var groupID;
	if (row <= 3) groupID = 0;
	else if (row <= 6) groupID = 3;
	else groupID = 6;

	if (cell <= 3) groupID += 0;
	else if (cell <= 6) groupID += 1;
	else groupID += 2;
	return groupID;
}

function returnFieldID(row,cell){
	var rowID = (row-1)%3;
	var cellID = (cell-1)%3;

	var id = "g"+returnGroup(row,cell)+"r"+rowID+"c"+cellID;
	return id;
}

function isCellFilledWith(id,number){
	if (document.getElementById(id).innerHTML == number) return true;
	return false;
}

function fillSingleSdkField(group,row,cell,nbr){
	document.getElementById("g"+group+"r"+row+"c"+cell).innerHTML = nbr;
}

function isGroupReadyForFill(group, nbr) {
	for (var row = 0; row < 3 ; row++)
		for (var col = 0; col < 3 ; col++)
			if ( document.getElementById("g"+group+"r"+row+"c"+col).innerHTML == nbr ) return false;
	return true;
}

function isCellReadyForFill(group, row, col, nbr) {
	row = returnRow(group,row);
	col = returnCol(group,col);

	for (var i = 1; i <= 9 ; i++) // Checking for Row
		if ( isCellFilledWith(returnFieldID(row,i),nbr) ) return false;	
	for (var i = 1; i <= 9 ; i++) // Checking for Col
		if ( isCellFilledWith(returnFieldID(i,col),nbr) ) return false;
	if ( isCellFilledWith(returnFieldID(row,col),nbr) ) return false;
	return true;
}

function fillWholeField() {
	for (var i = 0; i < 1; i++) {	
		var number = pickNumberOutPool();
		var groupNbr;
		var rowNbr;
		var colNbr;

		do { groupNbr = Math.floor((Math.random() * 9));} 
		while (!isGroupReadyForFill(groupNbr,number)); 

		do { 
			rowNbr = Math.floor((Math.random() * 2));
			colNbr = Math.floor((Math.random() * 2));
		} while (!isCellReadyForFill(groupNbr,rowNbr,colNbr,number));

	 	fillSingleSdkField(groupNbr,rowNbr,colNbr,number);
	}
}