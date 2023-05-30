// function that uses while-loop to display styled list of colors
function showColors() {
    const arr = ["red", "orange", "yellow", "green", "blue", "purple"];
    let i=0;
    let color_list = ""; 
    // while-loop interates through array
    while (i<arr.length) {
         // uses template literal
        let line=`<p style="color:${arr[i]};">${arr[i]}</p>`
        color_list+=line;
        // increments while-loop counter
        i+=1;
    }
    document.getElementById("color").innerHTML=color_list;
}

// function that uses a for-loop to display styled list of fonts
function showFonts() {
    const arr = ["serif", "sans-serif", "monospace"];
    let font_list = ""; 
    // for-loop interates through array
    for (let i = 0; i<arr.length; i++) {
        // uses template literal
        let line=`<p style="font-family:${arr[i]};">${arr[i]}</p>`
        font_list+=line;
    }
    document.getElementById("font").innerHTML=font_list;
}

// function that utilizes an array to display the number of words in a sentence
function getCount() {
    const text = document.getElementById("text").value;
    // splits text string into an array of substrings, using space as separator 
    const text_arr = text.split(" ");
    //uses length property of array to calculate number of words
    document.getElementById('wordcount').innerHTML=text_arr.length;
}

// an object that uses the let keyword
function meetDog() {
let dog = {
  name: "Molly ",
  age: "3 ",
  breed: "Beagle ",
  gender: "female ",
  meet: function() {
    return this.name + "is a "+this.age+ "year old "+this.gender+this.breed;
  }
}
 document.getElementById("Dog_Object").innerHTML=dog.meet();
}