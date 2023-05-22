
function myDictionary() {
   //create ingrdients dictionry 
   var ingredients = {
    flour: "2 cups",
    eggs: 3,
    sugar: "3 teaspoons",
    oil: "2 teaspoons"
   } 
    // delete oil key from ingredients
    delete ingredients.oil;
    var dictionaryItem = document.getElementById("Dictionary");
    // indgredients.oil will display as undefined because the oil key has been deleted
    dictionaryItem.innerHTML=ingredients.oil;
   
}

