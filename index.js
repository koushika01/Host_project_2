let answer=(Math.floor(Math.random()*100+1))
console.log(answer)
let attempts=0;
let guess_status=1;

function check(){
   
    let hints=document.getElementById('hint')
    let userinput=document.forms[0]['input'].value
 attempts++
 if(guess_status==1){
   
    if(userinput==answer){
        hints.innerHTML='your guess is correct'
        attempt.innerHTML='ATTEMPTS:'+attempts
        document.getElementById('button').innerHTML='reset'
        guess_status=0;
    }
    else if(userinput>answer){
        hints.innerHTML='guess lower'
        attempt.innerHTML='ATTEMPTS:'+attempts
        
    }
    else{
        hints.innerHTML='guess higher'
        attempt.innerHTML='ATTEMPTS:'+attempts
        
    }
 }
 else{
    document.getElementById('button').innerHTML='reset'
    guess_status=1;
    reset()
    hints.innerHTML='TRY IT!'
    
   
 }

}
function reset(){
     userinput=document.forms[0]['input'].value=null
    answer=(Math.floor(Math.random()*100+1))  
    console.log(answer)
    document.getElementById('button').innerHTML='check'
    attempts=0;
    attempt.innerHTML='ATTEMPTS:'+attempts
    
}
