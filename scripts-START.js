    const displayTimeLeft = document.querySelector('.display-time-left');
    const displayTimeEnd = document.querySelector('.display-time-End')
    const timerButtons = document.querySelectorAll('.timer__button')
    const inputTime = document.querySelector('#custom > input')
    let intervalTimer;

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds - (hours * 3600)) / 60)
    const secs = seconds % 60
    console.log({ hours, mins, secs })
}

function timer(seconds){
    const currentTime = Date.now();
    const endTime = currentTime + (seconds*1000);
    displayTime(seconds)

    intervalTimer = setInterval(()=>{
        let countdown = Math.round((endTime - Date.now()) / 1000);
        if (countdown <= 0){clearInterval(intervalTimer)}
        displayTime(countdown)
    },1000)
}

    function countdown(){
        //console.log(this.dataset.time)
        clearInterval(intervalTimer)
        timer(this.dataset.time)
    }

    timerButtons.forEach((button)=>{
        button.addEventListener('click',countdown)
    })


