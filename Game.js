
/*let Firstcard = generateRandomIntegerInRange(1, 20);
let secondcard = generateRandomIntegerInRange(9, 11);
console.log("Firstcard",Firstcard);
console.log("secondcard" ,secondcard);*/

let Firstcard =generateRandomIntegerInRange(2, 11);
let secondcard =generateRandomIntegerInRange(2, 11);
let hasblackjack=false;
let isAlive=false;
let msg="";
let dollars=0;

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sum=Firstcard+secondcard;
console.log(sum);

//let msgel=document.getElementById("msg-el");
let msgel=document.querySelector("#msg-el");

console.log(msgel)

let sumEL=document.getElementById("sum-el");
console.log(sumEL)
let cardEL=document.getElementById("card-el");
console.log(cardEL)

let player=document.getElementById("amount-el")

function newcard()
{
    if(isAlive===true && sum!=21){
  Firstcard=generateRandomIntegerInRange(2, 11);
  secondcard=generateRandomIntegerInRange(2, 11);
  sum=Firstcard+secondcard;

  start();
    }
}
function start()
{ isAlive=true

    if(sum<21)
    {
        msg="You can pick another card !";
    }
    
    if(sum==21)
    {
        msg=" You've got Blackjacked !"; 
        hasblackjack=true;
        dollars=50
    }
    if(sum>21)
    {
        msg="You are out of the game !";  
        isAlive=false;
    }
    
    
    msgel.textContent=msg; 
    //console.log(msg)
    
    sumEL.textContent= "Sum :"+" "+sum;
    cardEL.textContent = "Cards :"+" "+Firstcard+" "+secondcard
    player.textContent="Somi: $"+dollars
    
}



//cash out
//console.log(hasblackjack);
//console.log(isAlive);