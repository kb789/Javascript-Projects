//add
function add() {
    var ans=5+5;
    document.getElementById("Add").innerHTML="5+5="+ans;
}

//subtract
function sub() {
    var ans=5-4;
    document.getElementById("Sub").innerHTML="5-4="+ans;
}

//multiply
function mult() {
    var ans=5*5;
    document.getElementById("Mult").innerHTML="5*5="+ans;
}

//modulo
function mod() {
    var ans=4%2;
    document.getElementById("Mod").innerHTML="4%2="+ans;
}

//increment
function inc() {
    var ans=2;
    ans++;
    document.getElementById("Inc").innerHTML="2++="+ans;
}

//decrement
function dec() {
    var ans=4;
    ans--;
    document.getElementById("Dec").innerHTML="4--="+ans;
}

//generate random number
function rand() {
    var ans=Math.floor(Math.random()*10+1);
    document.getElementById("Rand").innerHTML="Random number="+ans;
}


