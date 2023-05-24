function Vote_Function() {
    var Age, Can_Vote;
    // gets input from browser
    Age = document.getElementById("Age").value;
    // ternary operation
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote+" to vote";
}

// Object constructor function with "this" keyword
function Dog(Name, Breed, Age, Size) {
    this.Dog_Name = Name;
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Size = Size;
}

// "new" keyword creates Dog objects
var Barney = new Dog('Barney', 'basset hound', 5, 'medium');
var Rosie = new Dog('Rosie', 'poodle', 7, 'small');


// displays results of constructor function in 'p' element
function MeetDog() {
 document.getElementById("DogInfo").innerHTML=Barney.Dog_Name+" is a "+ Barney.Dog_Breed + " who is "+ Barney.Dog_Age + " years old and "+Barney.Dog_Size+ " in size."
}

function Exponent() {
    var num_to_square = 5;
    //nested inner function
    function Square() {
        num_to_square*=num_to_square;
    }
    Square();
    return num_to_square;
}

console.log(Exponent());