var colors = generateRandomColor(numberOfSquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#pickdisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easy=document.querySelector('#easyBtn');
var hard=document.querySelector('#hardBtn');
var selected=document.querySelector(".selected");
var numberOfSquare=6;

easy.addEventListener("click",function(){
     easy.classList.add("selected");
       hard.classList.remove("selected");
       numberOfSquare=3;
       colors=generateRandomColor(numberOfSquare);
       pickedColor=pickColor();
       colorDisplay.textContent=pickedColor;
       for(i=0;i<squares.length;i++){
           if(colors[i]){
               squares[i].style.backgroundColor=colors[i];
           }
           else{squares[i].style.display='none'

           }
           }
    });
hard.addEventListener('click',function(){
    easy.classList.remove("selected");
     hard.classList.add("selected");
     numberOfSquare=6;
     colors=generateRandomColor(numberOfSquare);
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     for(i=0;i<squares.length;i++){
        
     squares[i].style.backgroundColor=colors[i];
         
         squares[i].style.display='block';}
     });

resetButton.addEventListener("click",function(){
    //generate all new colors;
    colors=generateRandomColor(numberOfSquare);
    //pick a new random color from the array
    pickedColor=pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    this.textContent='new color';
    messageDisplay.textContent="";
    //change colors of squares
    for (i = 0 ;i< squares.length; i++){
squares[i].style.backgroundColor=colors[i];
    };
    //change back the background color to black
    h1.style.backgroundColor="steelblue";
    
});

colorDisplay.textContent= pickedColor;
for(i=0;i<squares.length;i++){ 
    squares[i].style.backgroundColor=colors[i]; 
   
    //add click listener to square
       squares[i].addEventListener("click",function(){
var clickedColor=this.style.backgroundColor;

if(clickedColor==pickedColor){
    console.log(clickedColor,pickedColor)
messageDisplay.textContent='CORRECT!';
resetButton.textContent="PLAY AGAIN!";
changeColor(clickedColor);
h1.style.backgroundColor=pickedColor;
}

else{this.style.backgroundColor="black";
messageDisplay.textContent="try again!"}
    });
}

function changeColor(x){
        for (i = 0; i < squares.length;i++){
squares[i].style.backgroundColor=x;
        }
    };

    function pickColor(){
        var rendom=Math.floor(Math.random()*colors.length);
        return colors[rendom];
    };

    function generateRandomColor(num){
    var arr=[];
    for(i=0;i<num;i++){
 arr.push(randomColor());
    }
    return arr;
};

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", "+g+", "+b+")";
};
