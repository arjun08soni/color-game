var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)"
]
 var squares = document.querySelectorAll(".square");
 var pickedColor=pickColor();
 var colorDisplay=document.getElementById("colorDisplay");
 var msg=document.getElementById("message");
 
colorDisplay.textContent=pickedColor;

 for(var i=0; i<squares.length;i++){
 	squares[i].style.backgroundColor= colors[i];
	
	//event listener to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;

		//compare color of pickedColor
		if(clickedColor===pickedColor){
			msg.textContent="CORRECT!";
			changeColor(clickedColor);
		}
		else {
			this.style.backgroundColor= "#3c4245";
			msg.textContent="TRY AGAIN!";
			}	
		})
 }

 function changeColor(color) {
 	for(i=0;i<squares.length;i++)
		squares[i].style.backgroundColor= color;
 }

 function pickColor(){
 	var random= Math.floor(Math.random() * colors.length);
 	return colors[random];
 }