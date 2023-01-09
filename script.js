var contenedor = document.getElementById("card");
console.dir(contenedor)
contenedor.hidden=true

const regioneschile= [["1era Region","El morro de Arica", "Seca la weaaa"], ["2 Region","Desierto"], ["3era Region", "Los Mineros"]]; 
var titulo = document.getElementById("region");
var atractivo = document.getElementById("atractivos");
var clima = document.getElementById("clima")
function mostrar(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [0][0]
    atractivo.innerHTML = regioneschile [0][1]
    clima.innerHTML = regioneschile [0][2]
    

    
}








// onmousedown
// : 
// null
// onmouseenter
// : 
// null
// onmouseleave
// : 
// null
// onmousemove
// : 
// null
// onmouseout
// : 
// null
// onmouseover
// : 
// null
// onmouseup
// : 
// null
// onmousewheel
// : 
// null