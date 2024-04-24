let msg1=document.getElementById("msg1")
let msg2=document.getElementById("msg2")
let msg3=document.getElementById("msg3")

var result=Math.floor(Math.random()*10)
console.log(result)

var no_of_guess = 0;
var guessed_num = []

function play(){
    let guess=document.getElementById("guess").value

    if(guess<1 && guess>10){
        alert("Please enter a number from 1 to 10")
    }
    else if(guess>0 && guess <11){
        no_of_guess=no_of_guess+1
        guessed_num.push(guess)

        if(guess>result){
            msg1.innerText="Your guess is low"
            msg2.innerText="No of gamer guesses "+no_of_guess
            msg3.innerText="Guessed Numbers are "+guessed_num
        }
        else if(guess<result){
            msg1.innerText="Your guess is high"
            msg2.innerText="No of gamer guesses "+no_of_guess
            msg3.innerText="Guessed Numbers are "+guessed_num
        }
        else if(guess==result){
            msg1.innerText="Congrats You win"
            msg2.innerText="The lucky no is "+result
            msg3.innerText="You are find: "+no_of_guess+" Guesses"
            
        }
        
    }
    else{
        alert("Please enter a number from 1 to 10")
    }
}