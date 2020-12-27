var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 4);
var myFutureDate = new Date(2030, 10, 2);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1984, 9, 16, 5, 12, 45);
var birthday2 = new Date(1984, 9, 16, 5, 12, 45);

//get the month (0-11)
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month(1-31)
console.log(birthday.getDate());

//get the week (0-6)
console.log(birthday.getDay());

//get the hour (0-23)
console.log(birthday.getHours());

//get the millisecons since Jan 1 1970
console.log(birthday.getTime());

if (birthday == birthday2) {
    console.log("birthdays are equal");
} else {
    console.log("brithdays are not equal");
}

if (birthday.getTime == birthday2.getTime) {
    console.log("birthdays are equal");
} else {
    console.log("brithdays are not equal");
}