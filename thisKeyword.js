var myCar2 = {
    maxSpeed: 60,
    driver: "Jean",
    drive: function(speed, time) {
        console.log(speed * time);
    },
    test: function() {
        console.log(this);
    }
};
var myCar3 = {
    driver: "Jian",
    drive: function(speed, time) {
        console.log(speed * time);
    },
    test: function() {
        console.log(this);
    }
};

myCar2.test();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(60, 3);