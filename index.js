//Describe function here

//Saves interval ID to variable and calls timer function every 1 second
let intervalID = setInterval(() => {countdownSeconds(getTime)}, 1000);

// const timer = () => {
//     let elemArr = document.getElementsByClassName("number"); //array of elements with className = "number"
//     let newElemArr = Array.from(elemArr); //creates array from HTML collection

//     console.log(newElemArr);

//     newElemArr.forEach(element => {
//         if(parseInt(element.innerHTML) > 0){
//            return element.innerHTML -= 1;
//         } else{
//            return clearInterval(intervalID);
//         }
//     });
// }


//make it so 1 day is 24 hrs and 1 hr is 60 mins etc.
//also make it so when one gets to 0 not all of them stop
//use for..of loop instead?


//Seconds
//if sec > 0 && min > 0 => innerhtml - 1
//if sec === 0 && min >

// newElemArr.forEach(element => {
//     if(parseInt(element[3].innerHTML) > 0 && parseInt(element[2].innerHTML) > 0){
//        return element.innerHTML -= 1;
//     } else{
//        return clearInterval(intervalID);
//     }
// });



//get numbers
//start counting down seconds
//when seconds gets to zero, reduce mins by 1, if mins >0, countdown secs, else if mins = 0


const getTime = () => {
   let elemArr = document.getElementsByClassName("number"); //array of elements with className = "number"
   let newElemArr = Array.from(elemArr).map(elem => {return parseInt(elem.innerHTML);}); //creates array from HTML collection
  
   console.log(newElemArr);
   return newElemArr;
}
 
const countdownSeconds = (Arr) => {
   if(Arr[3] > 0 && Arr[2] > 0){
      return Arr[3] -= 1;
   } else{
      return clearInterval(intervalID);
   }
}