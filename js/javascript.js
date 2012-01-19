var letter;

while (!letter){
letter = prompt("Which letter should be written?");
}

var writeMany = function(){
	for (var i = 0; i < 10; i++ ){
		
			document.write(letter + "<br>");	
	}
};

writeMany ();



var writeManyTriangle = function(){
	for (var i = 0; i <= 10; i++ ){

		document.write("<br>");
		
		for (var c = 0; c <= i; c++ ){
			
			document.write(letter);

		}
	}
};

writeManyTriangle ();