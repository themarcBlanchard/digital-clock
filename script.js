// Digital Clock 

// saving the hour, minute and second in variables
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const ampmEl = document.getElementById('ampm');


// create a function to update the time
function updateClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = 'AM';

    // convert 24 hour time to 12 hour time
    if(hour > 12){
        hour -= 12;
        ampm = 'PM';
    }else if(hour === 0){
        hour = 12;
    }else if(hour === 12){
        ampm = 'PM';
    }

    // add 0 to the hour, minute and second if they are less than 10
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    // chaning the innerHTML of the elements
    hourEl.innerText =  hour;
    minuteEl.innerText =  minute;
    secondEl.innerText =  second;
    ampmEl.innerText =  ampm;

    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();