var numSquares = 6;
var colors =generate_random_colors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor =  pickColor();
var rgbh1 = document.getElementById("rgbcolor");
rgbh1.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.getElementsByTagName('h1')[0];
var resetButton = document.querySelector("#reset");
var Mode =document.querySelectorAll(".mode");
var ganeWon = false;

for(var i =0;i<Mode.length;i++){
	Mode[i].addEventListener("click",function(){
		Mode[0].classList.remove("selected");
		Mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent=="EASY")
			numSquares=3;
		else
			numSquares=6;
        reset();

	});
}

function reset(){
   colors =generate_random_colors(numSquares);
	  pickedColor =  pickColor();
	  rgbh1.textContent=pickedColor;
	  for(var i =0;i<squares.length;i++){
			if(colors[i])
			{squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];}
 		else
			squares[i].style.display="none";
		}
	  h1.style.backgroundColor="steelblue";
	  resetButton.textContent="New Colors";
	  messageDisplay.textContent="";

}
// easyMode.addEventListener("click",function(){

// 	easyMode.classList.add("selected");
// 	hardMode.classList.remove("selected");
// 	numSquares=3;
// 	colors =generate_random_colors(numSquares);
// 	  pickedColor =  pickColor();
// 	  rgbh1.textContent=pickedColor;
// 	  for(var i =0;i<squares.length;i++){
// 	  	if(colors[i])
// 			squares[i].style.backgroundColor=colors[i];
// 		else
// 			squares[i].style.display="none";
// 		}
// 	  h1.style.backgroundColor="steelblue";
// });
// hardMode.addEventListener("click",function(){
// 	numSquares=6;
// 	hardMode.classList.add("selected");
// 	easyMode.classList.remove("selected");
// 	colors =generate_random_colors(numSquares);
// 	  pickedColor =  pickColor();
// 	  rgbh1.textContent=pickedColor;
// 	  for(var i =0;i<squares.length;i++){
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
// 		}
// 	  h1.style.backgroundColor="steelblue";
// });
resetButton.addEventListener("click",function(){
	  reset();
});

for(var i =0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor===pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.backgroundColor=pickedColor;
			gameWon = true;
			resetButton.textContent="Play Again?"
		}
		else{
			
			this.style.backgroundColor="#232323";
			messageDisplay.textContent = "Try Again";		}
	});
}

function changeColor(color){
	for(var i =0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var number = Math.floor(Math.random()*colors.length);
	return colors[number];
}

function generate_random_colors(size){
	var arr=[];
	for(var i =0;i<size;i++)
	{
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){

	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
    var string = "rgb(" + red +", " + green + ", " + blue + ")";
    return string;

}