var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="./images/dice"+randomNumber1+".png";

var image1 = document.querySelector(".img1");
image1.setAttribute("src",randomImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="./images/dice"+randomNumber2+".png";

var image2 = document.querySelector(".img2");
image2.setAttribute("src",randomImage2);

var heading=document.querySelector("h1");

if(randomNumber1>randomNumber2){
    heading.innerHTML="Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    heading.innerHTML="Player 2 Wins!";
}else if(randomNumber2=randomNumber1){
    heading.innerHTML="Draw!";
}