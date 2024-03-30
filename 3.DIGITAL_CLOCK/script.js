let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// Sets up an interval that repeats a function every 1000 milliseconds (1 second)
setInterval(()=>{
    // Creates a new Date object representing the current date and time
    let currentTime = new Date();
    console.log(currentTime);
    // Updates the content of the hours element with the current hour (formatted with leading zero if necessary)
    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minutes.innerHTML =(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);
