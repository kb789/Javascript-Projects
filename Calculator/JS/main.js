 // global varianble, stores result of last calculation
 let num=0

 // global variable, stores last operator
 let op=""

 // function that is triggered when a number or decimal is clicked, adds it to calculator screen
function numberClick(val) {
   
    // handles the case where a calculation has been done and the next input entered is a number=resets calculator screen to zero
    if (num!==0 && op==="") {
        num=0;
        document.querySelector(".calculator-screen").value=val;
    
    // handles initial case where first number is a zero
    } else if (document.querySelector(".calculator-screen").value==="0") {
        document.querySelector(".calculator-screen").value=val;
    }
    
    // handles case where user accidentally inputs multiple decimal points; reduces it to one
    else if (val===".") {
        let screen = document.querySelector(".calculator-screen").value;
        let last_char = screen[screen.length-1]
      if (last_char===".") {
            screen=screen.slice(0, screen.length-1)
            screen+=val
            document.querySelector(".calculator-screen").value=screen;
        } 
        else {
            document.querySelector(".calculator-screen").value+=val;
        }
   }
    else {
    document.querySelector(".calculator-screen").value+=val;
    }

}

// function that is triggered when a +,-,*,or / operator is clicked; adds it to calculator screen
function operatorClick(val) {

         // handles the case where a calculation has been done and the next input entered is an operator==keeps result of previous calculation
        if (num!==0 && op==="") {
          op=val;
        }
        
        // deals with case where user accidentally enters multiple consecutive operators; only keeps the last one
        let screen = document.querySelector(".calculator-screen").value;
        let last_char = screen[screen.length-1]
        if ((last_char==="+" || last_char ==="-" || last_char ==="*" || last_char==="/") && val != "-") {
            screen=screen.slice(0, screen.length-1)
            document.querySelector(".calculator-screen").value=screen;
       
        // allows for multiplication and division by negative numbers.            
        } else if (val==="-" && (last_char==="+" || last_char ==="-")) {
            screen=screen.slice(0, screen.length-1)
            document.querySelector(".calculator-screen").value=screen;
        }
        document.querySelector(".calculator-screen").value+=val;
    }

//function that is triggerd when equals sign is clicked; performs calculation and displays result on calculator screen
function equalsClick(val) {
  
    //gets equation from calculator screen
    let equation = document.querySelector(".calculator-screen").value;
    
    // handles case where there is no second value after opeator
    let last_char = equation[equation.length-1]
    if (last_char==="+" || last_char ==="-" || last_char ==="*" || last_char==="/") {
        return;
     }

    //handles case where there is no operator 
    if (!(equation.includes("+")|| equation.includes("-") || equation.includes("*") || equation.includes("/")) ) {
        return;
    }
    //handles case where there is no operator and the number is negative
    if (equation[0] === "-") {
        let result = equation.substring(1);
        if (!(result.includes("+") || result.includes("-") || result.includes("*") || result.includes("/"))) {
        return;
    }
}
    // in the case where a previous calculation was done, resets result of previous calculation to zero so new equation can be calculated
    if (op!=="") {
        num=0;
    }
    
    // set initial operator to + so first number on screen can be added
    op="+";

    // stores index of number after operator, which will be found by the loop below
    let ind=0;

    //iterates through equation
    for (let i=0; i<equation.length;i++) {
        console.log(num)
        //looks for operator
        if (equation[i]==="+" || equation[i]==="-" || equation[i]==="*" || equation[i]==="/") {
            
            //distinguishes negative numbers from the minus operator
            if (i===0 && equation[i] === "-" ) {
              continue;
              }
            if ((op==="*" || op==="/") && equation[ind] === "-" ) {
                i+=1;
            
                continue;
             }
               
             // when operator is found, parses number before it and performs calculation that matches operator that was found
            if (op==='+') {
                num+=Number.parseFloat(equation.substring(ind,i));
            } 
            if (op==='-') {
                num-=Number.parseFloat(equation.substring(ind,i));
            } 
            if (op==='*') {
               num*=Number.parseFloat(equation.substring(ind,i));
            } 
            if (op==='/') {
                num/=Number.parseFloat(equation.substring(ind,i));
            } 
            // stores operator
            op=equation[i]
            
            //updates index of next number after operator found
            ind=i+1;
        }
    }
   
    // performs final calculation after last operator
    if (op==='+') {
        num+=Number.parseFloat(equation.substring(ind, equation.length));
        }
    if (op==='-') {
        num-=Number.parseFloat(equation.substring(ind, equation.length));
        }
    if (op==='*') {
        num*=Number.parseFloat(equation.substring(ind, equation.length));
        }
    if (op==='/') {
        num/=Number.parseFloat(equation.substring(ind, equation.length));
        }

    // displays result of calculation on calculator screen    
    // converts number to string, rounds it to 8 decimal places, removes extra zero padding
    document.querySelector(".calculator-screen").value=Number(num.toFixed(8));
    op="";  
    return;    
    }

// function that is triggered when AC button is clicked; resets everything.
function reset() {
  num=0;
  op="";
  document.querySelector(".calculator-screen").value=Number(0);
}