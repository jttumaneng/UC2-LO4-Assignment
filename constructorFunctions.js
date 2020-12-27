var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "jean");
var myCar2 = new Car(50, "jian");
var myCar3 = new Car(10, "joan");
var myCar4 = new Car(20, "juan");

myCar.drive(20, 5);
myCar3.logDriver();
console.log(myCar2.maxSpeed);