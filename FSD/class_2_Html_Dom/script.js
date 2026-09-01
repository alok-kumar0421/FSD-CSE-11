function para(){
    parent = document.getElementById("root")
    p = document.createElement("p")
    p.textContent="hi i am from p"
    parent.append(p)
}

function remove(){
    parent =  document.getElementById("root")
    p = document.querySelector("p")
    if(p){
        parent.removeChild(p)
    }
}