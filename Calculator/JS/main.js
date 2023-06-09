
 let num=0
 let op=""

 
function numberClick(val) {
   
    // repeating decimals
    // handles the case where a calculation has been done and the next input entered is a number=resets to zero
    if (num!==0 && op==="") {
        num=0;
        document.querySelector(".calculator-screen").value=val;
    // handles initial case where first number is a zero
    } else if (document.querySelector(".calculator-screen").value==="0") {
        document.querySelector(".calculator-screen").value=val;
    // handles case where user accidentally inputs 2 decimal points
    }
    else if (val===".") {
        let screen = document.querySelector(".calculator-screen").value;
        let last_char = screen[screen.length-1]
        console.log(last_char)
      
        if (last_char===".") {
            screen=screen.slice(0, screen.length-1)
            screen+=val
            document.querySelector(".calculator-screen").value=screen;
            console.log(screen)
        } 
        else {
            document.querySelector(".calculator-screen").value+=val;
        }

    }
    else {
    document.querySelector(".calculator-screen").value+=val;
    }

}

function operatorClick(val) {
         // handles the case where a calculation has been done and the next input entered is an operator==doesn't reset to zero
        if (num!==0 && op==="") {
          op=val;
        }
        
        // deals with case where user accidentally enters 2 consecutive operators
        let screen = document.querySelector(".calculator-screen").value;
        let last_char = screen[screen.length-1]
        if ((last_char==="+" || last_char ==="-" || last_char ==="*" || last_char==="/") && val != "-") {
            screen=screen.slice(0, screen.length-1)
            console.log(screen)
            document.querySelector(".calculator-screen").value=screen;
            
        } else if (val==="-" && (last_char==="+" || last_char ==="-")) {
            screen=screen.slice(0, screen.length-1)
            console.log(screen)
            document.querySelector(".calculator-screen").value=screen;
        }

    
        
    

        document.querySelector(".calculator-screen").value+=val;
    
    }

function equalsClick(val) {
    
    let equation = document.querySelector(".calculator-screen").value;
   
    
    if (op!=="") {
      num=0;
    }
    
    op="+";
    let ind=0;
    for (let i=0; i<equation.length;i++) {
        if (equation[i]==="+" || equation[i]==="-" || equation[i]==="*" || equation[i]==="/") {
            
            //distinguishes negative numbers from the minus operator
            if (i===0 && equation[i] === "-" ) {
             continue;
            }
            if (equation[i] === "-" && (equation[i-1] === '*' || equation[i-1]==="/" )) {
                continue;
               }
            
            
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
           
            op=equation[i]
            ind=i+1;
            
        }
    }
   
  
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

        document.querySelector(".calculator-screen").value=Number(num.toFixed(8));
        op="";
        
}


