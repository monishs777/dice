var randomNumber1 = Math.floor(Math.random() * 6) + 1;
if(randomNumber1===1){
    document.querySelectorAll("img")[0].setAttribute("src","image/dice1.png");
    document.querySelector("p")[1].innerHTML="The Number is 1 "
}
else if(randomNumber1===2){
    document.querySelectorAll("img")[0].setAttribute("src","image/dice2.png");
    document.querySelector("p")[1].innerHTML="The Number is 2 "

}
else if(randomNumber1===3){
    document.querySelectorAll("img")[0].setAttribute("src","image/dice3.png");
    document.querySelector("p")[1].innerHTML="The Number is 3 "

}
else if(randomNumber1===4){
    document.querySelectorAll("img")[0].setAttribute("src","image/dice4.png");
        document.querySelector("p")[1].innerHTML="The Number is 4 "

}
else if(randomNumber1===5){
    document.querySelectorAll("img")[0].setAttribute("src","image/dice5.png");
        document.querySelector("p")[1].innerHTML="The Number is 5 "

}
else {
    document.querySelectorAll("img")[0].setAttribute("src","image/dice6.png");
        document.querySelector("p")[1].innerHTML="The Number is 6 "

}