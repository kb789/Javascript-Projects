
// joins 2 strings
function Concat() {
    var pt1 = "This is ";
    var pt2 = "a full sentence.";
    var full_sent=pt1.concat(pt2);
    document.getElementById("concat").innerHTML=full_sent;
}

// extracts part of a string
function Slice() {
    var sent = "This is a full sentence";
    var word = sent.slice(10,14);
    document.getElementById("slice").innerHTML=word;
}

// converts number to string
function Tostring() {
    var num=54321;
    document.getElementById("tostring").innerHTML=num.toString();

}

// formats number to a specific length
function Toprecision() {
    var num=12345.200334101;
    document.getElementById("toprecision").innerHTML=num.toPrecision(10);
} 