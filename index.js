//function that calculates the difference in time between 2 dates and outputs the difference as a countdown

//date to countdown to
const futureDate = new Date("December 3 2022 4:43:00").getTime();

const timer = (countdown) => {
   //get current date
   let now = new Date().getTime();

   //find amount of milliseconds to countdown
   let diff = countdown - now;

   //calculate amount of time remaining for each time value
   let day = Math.floor(diff / (1000 * 60 * 60 * 24));
   let hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   let sec = Math.floor((diff % (1000 * 60)) / 1000);

   //output result onto screen
   document.getElementsByClassName("number")[0].innerHTML = day;
   document.getElementsByClassName("number")[1].innerHTML = hr;
   document.getElementsByClassName("number")[2].innerHTML = min;
   document.getElementsByClassName("number")[3].innerHTML = sec;

   //stop the setInterval() method when the difference between now and the countdown date is less than zero
   if(diff < 0){
      clearInterval(intervalID);
   };
}

//call the timer function every 1 second using the futureDate as an argument, save the interval ID in order to clear the timer
let intervalID = setInterval(() => {timer(futureDate)}, 1000);
