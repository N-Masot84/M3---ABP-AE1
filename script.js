var contenedor = document.getElementById("info");
console.dir(contenedor)
contenedor.hidden=true

const regioneschile = [["Arica y Parinacota","El morro de Arica"], ["Tarapacá","Playa Cavancha, Iquique"], ["Antofagasta","La Portada"], ["Atacama", "Desierto Florido"], ["Coquimbo", "Valle del Elqui"], ["Valparaíso", "El Puerto"], ["Metropolitana de Santiago", "Cajón del Maipo"], ["Bernardo O'higgins","Punta de lobos"], ["Maule","Parque Nacional Siete Tazas"], ["Ñuble","Reserva Nacional Ñuble"], ["Bio Bio","Saltos del Laja"], ["Araucanía","Volcán Villarica"], ["Región de Los Ríos","Reserva Biológica Huilo Huilo"], ["Región de Los Lagos","Lago Llanquihue"], ["Carlos Ibañez Del Campo","Parque Nacional Laguna San Rafael"], ["Magallanes","Parque Nacional Torres Del Paine"]]; 
var titulo = document.getElementById("region");
var atractivo = document.getElementById("atractivos");

function mostrarArica(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [0][0] 
    atractivo.innerHTML = regioneschile [0][1]
}
function esconder(){
    contenedor.hidden=true
}

function mostrarIquique(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [1][0] 
    atractivo.innerHTML = regioneschile [1][1]
}

function mostrarAntofa(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [2][0] 
    atractivo.innerHTML = regioneschile [2][1]  
}

function mostrarAtacama(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [3][0] 
    atractivo.innerHTML = regioneschile [3][1]  
}

function mostrarCoquimbo(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [4][0] 
    atractivo.innerHTML = regioneschile [4][1]  
}

function mostrarValpo(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [5][0] 
    atractivo.innerHTML = regioneschile [5][1]  
}

function mostrarMetropolitana(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [6][0] 
    atractivo.innerHTML = regioneschile [6][1]  
}

function mostrarBernardoO(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [7][0] 
    atractivo.innerHTML = regioneschile [7][1]  
}

function mostrarMaule(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [8][0] 
    atractivo.innerHTML = regioneschile [8][1]  
}

function mostrarÑuble(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [9][0] 
    atractivo.innerHTML = regioneschile [9][1]  
}

function mostrarBioBio(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [10][0] 
    atractivo.innerHTML = regioneschile [10][1]  
}

function mostrarAraucania(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [11][0] 
    atractivo.innerHTML = regioneschile [11][1]  
}

function mostrarRegionDeLosRios(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [12][0] 
    atractivo.innerHTML = regioneschile [12][1]  
}

function mostrarRegionDeLosLagos(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [13][0] 
    atractivo.innerHTML = regioneschile [13][1]  
}

function mostrarAysen(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [14][0] 
    atractivo.innerHTML = regioneschile [14][1]  
}

function mostrarMagallanes(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [15][0] 
    atractivo.innerHTML = regioneschile [15][1]  
}









