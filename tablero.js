var jugar = new Array(76);

function dibujar() {
	
	for(var i=0; i < 30; i++) { 
		juegoT(i);
	}
}

function juegoT(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
	
	do {
		newNum =(colPlace[thisSquare] * 1) + NuevoNum() + 1;
	}
	while (jugar[newNum]);
	
	jugar[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}



function NuevoNum() {
	return Math.floor(Math.random() * 75);
	
}

function cartasT() {
	for(var i=1; i<jugar.length; i++) {
	jugar[i] = false;
	}
	
	dibujar();
}

function jugar(){
    contenedores.innerHTML = "";
    var num=generarNumero(0, 90);
    if ((nJugados.includes(num)|| nJugados === [])&& nJugados.length < 90 ) {
     
        jugar();
    } else if(nJugados.length<90){
        nJugados.push(num);
       
   
        console.log(nJugados[nJugados.length - 1]);
    }else{
        alert("Todos los numeros se han jugado");
    }
}
function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}