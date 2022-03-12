var tela = document.querySelector("#forca");
var pincel = tela.getContext("2d");

function desenhaTabuleiro() {
	pincel.fillStyle = "#E5E5E5";
	pincel.fillRect(30, 0, 500, 400);

	pincel.fillStyle = "#F4A460";
	pincel.fillRect(150, 40, 30, 300);
	pincel.fillRect(180, 60, 200, 30);
	pincel.fillRect(130, 340, 250, 10);

	pincel.fillStyle = "#CD853F";
	pincel.fillRect(340, 90, 5, 40);
}

function desenhaLinha(x, y, largura, altura) {
	pincel.fillStyle = "black";
	pincel.fillRect(x, y, largura, altura);
}

function adicionaLinha(x, y) {
	var elem = document.createElement("img");
	elem.src= "img/traco.png";
	elem.style.position = "absolute";
	elem.style.bottom = y + "vw";
	elem.style.right = x + "vw";
	elem.style.width ="2%";

	var divImage = document.getElementById("traco");
	divImage.appendChild(elem);
}

function adicionaNumeroLinhas(espacos) {
	var x = 37;
	var y = 7.9;
	for (var i = 0; i < espacos; i++) {
		adicionaLinha(x, y);
		x = x -3.24;
	}
}

function desenhaForca(tentativas){
	if(tentativas==0){
		pincel.fillStyle = "black";
		pincel.beginPath();
		pincel.arc(342, 150, 20, 0, 2 * Math.PI);
		pincel.fill();
		pincel.fillStyle = "#E5E5E5";
		pincel.beginPath();
		pincel.arc(342, 150, 15, 0, 2 * Math.PI);
		pincel.fill();

  } else if(tentativas==1){

	  	pincel.fillStyle = "black";
		pincel.fillRect(338, 168, 10, 80);
    
  } else if(tentativas==2){

	  	pincel.fillStyle = "black";
		pincel.beginPath();
		pincel.moveTo(340, 180);
		pincel.lineTo(300, 210);
		pincel.lineWidth = 5;
		pincel.stroke();
    
  } else if(tentativas==3){

	  	pincel.fillStyle = "black";
		pincel.beginPath();
		pincel.moveTo(346, 180);
		pincel.lineTo(386, 210);
		pincel.stroke();
    
  } else if(tentativas==4){

	  	pincel.fillStyle = "black";
		pincel.beginPath();
		pincel.moveTo(340, 242);
		pincel.lineTo(300, 290);
		pincel.stroke();
	} else if(tentativas==5){

  	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(346, 242);
	pincel.lineTo(380, 290);
	pincel.stroke();
    
  }
}

function adicionaLetra(letra, x, y) {
	var elem = document.createElement("letters");
 	elem.innerHTML=letra;
 	elem.style.position="absolute";
  	elem.style.bottom=y+"vw";
  	elem.style.right=x+"vw";
  	elem.style.fontSize= " 1.875vw";
  	var divText=document.getElementById('letra');
  	divText.appendChild(elem);
}

function adicionaLetrasPosicao(letra,index){
  for(var i =0;i<index.length;i++){
    x = 37.5-(index[i]*3.24);
    adicionaLetra(letra, x, 7.9);
  }
}

function venceu(){
  var elem=document.createElement("h1");
  elem.innerHTML="Você venceu!";
  elem.style.position="absolute";
  elem.style.top="40vw";
  elem.style.left="46vw";
  elem.style.fontSize= " 2.6vw";
  var divText=document.getElementById('letra');
  divText.appendChild(elem);
  
}

function perdeu(word){
 	var elem=document.createElement("h1");
 	elem.innerHTML="Você perdeu! A palavra era " + palavraAleatoria;
 	elem.style.position="absolute";
 	elem.style.top="40vw";
 	elem.style.left="46.875vw";
 	elem.style.fontSize= "1.35vw";
 	var divText=document.getElementById('letra');
 	divText.appendChild(elem);
  
}
