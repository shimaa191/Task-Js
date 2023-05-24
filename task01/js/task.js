function multiplyFive(num) {
  let res = 1;
  while (num > 1) {
    res *= num;
    num--;
  }
  return res;
}

function hello() {
  console.log("Hello World");
}

function isLeapYear(year) {
  if (year % 4 == 0 && year != 100) return "it's a Leap year";
  else if (year % 400 == 0) return "it's a Leap year";
  else return "it isn't a Leap year";
}

// console.log(multiplyFive(7));
// hello();

let year = +prompt("enter the year"),
  num = +prompt("enter the number");

hello();
console.log(isLeapYear(year));
console.log(multiplyFive(num));
