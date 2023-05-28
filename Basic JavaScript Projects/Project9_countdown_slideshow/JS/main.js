// countdown function 

function countdown() {
    //gets seconds input from html document
    var seconds = document.getElementById("seconds").value;
    
    function tick() {
        //reduces current second by 1 and displays it in html document
        seconds=seconds-1;
        timer.innerHTML=seconds;
        
        //pauses tick for 1 second
        var time = setTimeout(tick, 1000)

        // checks if seconds has been reduced enough that it has reached -1
        //if it has, sends times up alert, clears timeout, and removes seconds count from html document.
        if (seconds === -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML='';
        }
    }
    // calls local tick function 
    tick();
}

// slide show

// sets the initially displaying slide to the first slide.
let slideIndex = 1;

// calls showSlides with initial current slide.
showSlides(slideIndex);

// Next/previous controls
// increments currently displaying slide if next button was selected
// decrements currently displaying slide if previous button was selected.
// calls showSlides with updated current slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
// Thumbnail image controls
// sets currently dislaying slide to match thumbnail dot image that was clicked
// calls showSlides with updated current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// sets/updates which slide is showing in the carosel based on current slide input.  
function showSlides(n) {
    let i;
    // gets array of slide images from the html document
    let slides = document.getElementsByClassName("mySlides");

    // gets array of dots from the html document
    let dots = document.getElementsByClassName("dot");

    // checks if the number of the current slide input is greater than the index number of the last slide in the array of slide images.
    // if it is, sets new currently displaying slide back to the first slide in the array (to make the carosel circular)
    if (n > slides.length) 
        {slideIndex = 1}
    
    // checks if the number of the current slide input is less than the index number of the first slide in the array of slide images.
    //if it is, sets new currently displaying slide to the last slide in the array. (to make the carosel circular)
    if (n < 1) 
        {slideIndex = slides.length}
    
    //temporarily hides all the slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // temporaily makes all the dots inactive.
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // makes the new current slide display
    slides[slideIndex-1].style.display = "block";
    
    // makes the new current dot active.
    dots[slideIndex-1].className += " active";
  }
  