let intervalTimer;

function timer(seconds){
    const currentTime = Date.now();
    const endTime = currentTime + (seconds*1000);
    
    intervalTimer = setInterval(()=>{
        let countdown = (endTime - Date.now())/1000;
        //console.log(Math.round(countdown))
        if (countdown < 0){
            clearInterval(intervalTimer)
        }
        
        //console.log(Math.round(countdown))
    },1000)

}