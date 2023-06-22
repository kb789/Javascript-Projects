function addToDo() {
  
    let newtodo = document.getElementById("todo").value;
    if (localStorage.count) {
        localStorage.count = Number(localStorage.count) + 1;
      } else {
        localStorage.count = 1;
      }
   
    
    localStorage.setItem(localStorage.count, newtodo);
  
}



const ul = document.getElementById("todolist");
let todolen = Number(localStorage.getItem("count"));

for (let i=1; i<=todolen; i++) {
  let li = document.createElement('li');
  li.setAttribute('id', i.toString());
  li.innerHTML = localStorage.getItem(i.toString());
  let span = document.createElement('span');
  span.onclick= function() {
    localStorage.removeItem(this.parentNode.id);
    this.parentNode.remove()
    localStorage.count = Number(localStorage.count) - 1;
  };
  span.innerHTML="    X"
  li.appendChild(span)
  ul.appendChild(li);
  



}