
 let num=0
 let op=""

 
function numberClick(val) {
   
    // repeating decimals
    if (num!==0 && op==="") {
        num=0;
        document.querySelector(".calculator-screen").value=val;
    } else if (document.querySelector(".calculator-screen").value==="0") {
        document.querySelector(".calculator-screen").value=val;
    }
    else {
    document.querySelector(".calculator-screen").value+=val;
    }
}

function operatorClick(val) {
        // if previous char in val is operator, replace it
        if (num!==0 && op==="") {
          op=val;
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

        document.querySelector(".calculator-screen").value=num;
        op="";
}


