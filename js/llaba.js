function circulo(){
    let figura= document.getElementById("figura")
    figura.classList.toggle("circulo")
}
function rectangulo(){
    let figura= document.querySelector("#figura")
    figura.classList.toggle("rectangulo")
    
}
function moveRight(){
    let figura= document.getElementById("figura")
    figura.classList.toggle("right") 
    alert("Estas moviendo la figura hacia la derecha") 
}
function moveLeft(){
    let figura= document.querySelector("#figura")
    figura.classList.toggle("left") 
    alert("Estas moviendo la figura hacia la izquierda") 
}
function gif(){
    let figura= document.getElementById("figura")
    figura.classList.toggle("gif") 
}
function luna(){
    let figura= document.querySelector("#figura")
    figura.classList.toggle("luna") 
}
function estrella(){
    let figura=document.querySelector('#figura')
    figura.classList.toggle('estrella')
}
function degradado(){
    let figura= document.getElementById("figura")
    figura.classList.toggle("degradado") 
}
function moveTop(){
    let figura= document.querySelector("#figura")
    figura.classList.toggle("top") 
    alert("Estas moviendo la figura hacia arriba") 
}
function moveBottom(){
    let figura= document.getElementById("figura")
    figura.classList.toggle("bottom") 
    alert("Estas moviendo la figura hacia abajo") 
}
function moveDiagonal(){
    let figura= document.querySelector("#figura")
    figura.classList.toggle("diagonal")  
    alert("Estas moviendo la figura en diagonal") 
}
function bgGeneral() {
    let padre = document.getElementById("padre");
    padre.style.background = "url('https://media4.giphy.com/media/3o6Mb7smQD0aeAwW0o/giphy.gif')";
    padre.style.backgroundColor = prompt("Por favor, ingresa tu color en ingles");
}
function bgFigura(){
    let figura= document.querySelector("#figura")
    figura.style.backgroundColor =  prompt("Por favor, ingresa tu color en ingles");
}
function panelLateral(){
    let panel=document.getElementById("panelLateral");
    panel.classList.toggle("active")
}
function panelSuperior(){
    let panel=document.querySelector("#panelSuperior")
    panel.classList.toggle("active")
}
function circulo(){
    let figura= document.querySelector("#figura")
    figura.classList.toggle("circulo")  
    alert("se esta volviendo circular") 
    document.querySelector("#titulo").innerHTML="circulo";
}