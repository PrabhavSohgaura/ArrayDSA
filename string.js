//DSA questions related to strings

//slice method - this method extract a part of string and returns the extracted part in a new string
// this takes two parameters - start postion and end position

//Q1 - find the middle seat from the given seat no.

function middleSeat(seat) {
  let s = seat.slice(-1);

  if (s === "b" || s === "e") {
    console.log("This is a middle seat");
  } else {
    console.log("this is a corner seat or window seat");
  }
}

console.log(middleSeat("11b"));
console.log(middleSeat("11a"));
console.log(middleSeat("11e"));

//Q.2 - fix the capitalization issue in passenger name
const passenger = "pRaBhav";
const passengerLower = passenger.toLowerCase();
const passengerName = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerName);
