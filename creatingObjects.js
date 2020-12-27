var myArray = new Array();
myArray[0] = 9;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Jean";
myCar.drive = function() {
    console.log("now driving");
};

myCar.drive();
console.log(myCar.maxSpeed);
console.log(myCar.driver);

var myCar2 = {
    maxSpeed: 60,
    driver: "Jean",
    drive: function(speed, time) {
        console.log(speed * time);
    }
};
console.log(myCar2.maxSpeed);
myCar2.drive(60, 6);