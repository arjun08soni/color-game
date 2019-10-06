 var numSquares=6;
 var colors = [];
 var pickedColor;
 var red,blue,green,quest,totval;
 var squares = document.querySelectorAll(".square");
 var colorDisplay=document.getElementById("colorDisplay");
 var msg=document.getElementById("message");
 var h1 = document.querySelector("h1");
 var resetButton=document.querySelector("#reset");
 var modeBtn=document.querySelectorAll(".mode");
 //var hintDisp=document.querySelector("#hint");

 init();

 function init(){
 	setUpModeBtn();
 	setUpSquares();
 	reset();
 }

function setUpModeBtn(){
	for(var i = 0;i < modeBtn.length; i++){
	 	modeBtn[i].addEventListener("click",function(){
	 		modeBtn[0].classList.remove("selected");
	 	 	modeBtn[1].classList.remove("selected");
	 	 	this.classList.add("selected");
	 	 	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	 	 	 reset();
	 	});
	 }
}

function setUpSquares(){
	for(var i=0; i<squares.length;i++){	
		squares[i].addEventListener("click",function(){    	//event listener to squares
		var clickedColor = this.style.backgroundColor;        		//grab color of clicked square
		if(clickedColor === pickedColor){ 									//compare color of pickedColor
			msg.textContent = "CORRECT!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play again?";
		}
		else {
			this.style.backgroundColor = "#3c4245";
			msg.textContent = "TRY AGAIN!";
			} 	
		});
 	}
}
 

 function reset() {
 	colors= generateRandomColors(numSquares);
 	pickedColor=pickColor();
 	quest=pickedColor.split(",");
 	red=parseInt(quest[0].slice(4,));
 	green=parseInt(quest[1]);
 	blue=parseInt(quest[2].slice(0,-1));
 	//hintmsg.insertAdjacentHTML("beforeend","Which color is obtained by addind: " + Math.floor(red/255*100) + "% Red, " + Math.floor(green/255*100) + "% Green and " + Math.floor(blue/255*100) + "% Blue");
 	totval=parseInt(red+green+blue);
 	redp=Math.floor(red/totval*100);
 	greenp=Math.floor(green/totval*100);
 	bluep=Math.floor(blue/totval*100);
 	document.querySelector("p").textContent="Which color is obtained by adding " +redp+ " units of red, "+greenp+" units of green and "+bluep+" units of blue?";
 	colorDisplay.textContent=pickedColor;
 	resetButton.textContent="NEW COLORS";
 	msg.textContent="";
 	
 	for(var i = 0; i < squares.length; i++){
 		if(colors[i]){
 			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
 		} else{
 			squares[i].style.display = "none";
 		}
 	}	
 	h1.style.backgroundColor = "#52de97";
}  
	
resetButton.addEventListener("click", function(){
	reset();
 })

function changeColor(color) {
 	for(var i = 0; i < squares.length; i++)
		squares[i].style.backgroundColor = color;
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generateRandomColors(num){
 	var arr = [];
	for(var i = 0;i < num; i++)
 		arr.push(generateRBG());
	return arr;
 }

 function generateRBG(){
 	var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
 	var b= Math.floor(Math.random()*256);
 	//return "Which color is obtained by addind: " + red/255*100 + "% Red" + green/255*100 + "% Green and" + blue/255*100 + "% Blue";
	return "rgb(" + r + ", " + g + ", " + b + ")";
 }