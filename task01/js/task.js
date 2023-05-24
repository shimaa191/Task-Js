function dividByFive(num) {
  if (num % 5 == 0) return "number is divided by 5";
  else return "number isn't divided by 5";
}

function hello() {
  return "Hello World";
}

function isLeapYear(year) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
    return "it's a Leap year";
  else return "it isn't a Leap year";
}

// // console.log(multiplyFive(7));
// // hello();

// let year = +prompt("enter the year"),
//   num = +prompt("enter the number");

// hello();
// console.log(isLeapYear(year));
// console.log(multiplyFive(num));

const btnPrint = document.querySelector("#print"),
  btnyear = document.querySelector("#year"),
  btndivid = document.querySelector("#divid"),
  btnrandomNum = document.querySelector("#randomNum"),
  show = document.querySelector("#show");

btnPrint.addEventListener("click", function () {
  // let cahch = hello();
  show.innerText = hello();
});

btnyear.addEventListener("click", function () {
  let year = +prompt("enter the year");
  show.innerText = isLeapYear(year);
});

btndivid.addEventListener("click", function () {
  let num = +prompt("enter the number");
  show.innerText = dividByFive(num);
});

btnrandomNum.addEventListener("click", function () {
  //Math.floor(Math.random() * (max - min) ) + min;
  let num = Math.floor(Math.random() * (1000 - 100)) + 100;
  show.innerText = num;
});
