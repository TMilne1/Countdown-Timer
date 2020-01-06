    const displayTimeLeft = document.querySelector('.display__time-left');
    const displayTimeEnd = document.querySelector('.display__end-time')
    const timerButtons = document.querySelectorAll('.timer__button')
    const inputTime = document.querySelector('#custom')
    let intervalTimer;

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds - (hours * 3600)) / 60)
    const secs = seconds % 60
    const display = `${hours}:${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs} `
    displayTimeLeft.innerHTML = display
    document.title = display;
}

function displayEndTime(milli){
    const end = new Date(milli)
    const hours = end.getHours();
    const mins = end.getMinutes();
    const secs = end.getSeconds();

    const display = 
        `Done at: ${hours > 12 ? hours - 12 : hours}:${mins < 10 ? "0" : ""}${mins}${hours / 12 >= 1 ? "PM" : "AM"} ${secs < 10 ? "0" :""}${secs}s ` 
    displayTimeEnd.textContent = display;
}

function timer(seconds){
    const currentTime = Date.now();
    const endTime = currentTime + (seconds*1000);
    displayTime(seconds)
    displayEndTime(endTime)
    intervalTimer = setInterval(()=>{
        let countdown = Math.round((endTime - Date.now()) / 1000);
        displayTime(countdown)
        if (countdown <= 0){clearInterval(intervalTimer)}
        
        
    },1000)

}

    function countdown(e){
        e.preventDefault();
        //console.log(this.dataset.time)
        console.log(this.value)
        seconds = this.dataset.time || (parseInt(this.minutes.value)*60);
        clearInterval(intervalTimer)
        timer(seconds)
        if(this.name =='customForm'){
            this.reset();
        }
    }

     

    timerButtons.forEach((button)=>{button.addEventListener('click',countdown)})
    inputTime.addEventListener('submit',countdown)




