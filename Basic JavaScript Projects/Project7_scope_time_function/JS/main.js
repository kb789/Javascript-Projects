//x is global variable
var x = 10;

function add() {
    // z is local variable within this function
    var z = 3;
    z+=x;
    console.log(z);
}

function subtract() {
    z-=1;
    // ReferenceError: z is not defined in this function
    console.log(z);
}

add();
subtract();

function evenTest(num) {
    // if-else statement
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

evenTest(20);

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
     Reply="It is morning time!";
    } else if (Time >= 12 == Time < 18) {
     Reply = "It is afternoon";
    } else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_Day").innerHTML=Reply;
}