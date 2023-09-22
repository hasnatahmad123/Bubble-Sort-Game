var timer=60;
var hit=0;
var score=0;
function makeBubble(){
    var bubble="";
for(var i=0; i<208;i++){
    var randomNumber=Math.floor(Math.random()*10)

    bubble+=`   <div id="bubble">${randomNumber}</div>`
}
document.querySelector("#pbtm").innerHTML=bubble
}
function countdown(){
    var timee=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time").innerHTML=timer; 
        }
        else{
            clearInterval(timee);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over <br> Your score is ${score} `
        }
    },1000)
  
    }
function hitvalue(){
     hit=Math.floor(Math.random()*10);
    var hitdom=document.querySelector("#hitnum").innerHTML=hit
}

function increaseScore(){
    score+=10;
    document.querySelector("#addScore").innerHTML=score;
}
var d = document.querySelector("#pbtm").innerHTML=addEventListener("click",function(a){
      var clickedNumber=Number(a.target.innerHTML);
      console.log(clickedNumber);
      if(hit===clickedNumber){
        makeBubble();
        increaseScore();
        hitvalue();


      }
})

hitvalue();
countdown()
makeBubble();





