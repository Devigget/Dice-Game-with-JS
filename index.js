var rN1 = Math.floor(Math.random()*6)+1;
var rN2 = Math.floor(Math.random()*6)+1;



var DiceeImage=document.querySelector(".img1");

DiceeImage.src="./images/dice"+rN1+".png";

var DiceeImage=document.querySelector(".img2");

DiceeImage.src="./images/dice"+rN2+".png";

 if(rN1 >rN2)
    {
        document.querySelector("h1").textContent="Player 1 Wins!";
    }
    else if(rN1===rN2){
        document.querySelector("h1").textContent="Draw!";
    }
    else{
        document.querySelector("h1").textContent="Player 2 Wins!";
    }
