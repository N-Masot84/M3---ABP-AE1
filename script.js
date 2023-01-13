var contenedor = document.getElementById("info");
console.dir(contenedor)
contenedor.hidden=true

const titulo = document.getElementById("region");
const atractivo = document.getElementById("atractivos");
const imagen = document.getElementById("img")
const regioneschile = [["Arica y Parinacota","El morro de Arica"], ["Tarapacá","Playa Cavancha, Iquique"], ["Antofagasta","La Portada"], ["Atacama", "Desierto Florido"], ["Coquimbo", "Valle del Elqui"], ["Valparaíso", "El Puerto"], ["Metropolitana de Santiago", "Cajón del Maipo"], ["Bernardo O'higgins","Punta de lobos"], ["Maule","Parque Nacional Siete Tazas"], ["Ñuble","Reserva Nacional Ñuble"], ["Bio Bio","Saltos del Laja"], ["Araucanía","Volcán Villarica"], ["Región de Los Ríos","Reserva Biológica Huilo Huilo"], ["Región de Los Lagos","Lago Llanquihue"], ["Carlos Ibañez Del Campo","Parque Nacional Laguna San Rafael"], ["Magallanes","Parque Nacional Torres Del Paine"]]; 


function mostrarArica(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [0][0] 
    atractivo.innerHTML = regioneschile [0][1]
    foto = imagen.src="img/I.jpg"
    
}

function esconder(){
    contenedor.hidden=true
}

function mostrarIquique(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [1][0] 
    atractivo.innerHTML = regioneschile [1][1]
    foto = imagen.src="img/I.I.jpg"
}

function mostrarAntofa(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [2][0] 
    atractivo.innerHTML = regioneschile [2][1]  
    foto = imagen.src="img/II.jpg"
}

function mostrarAtacama(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [3][0] 
    atractivo.innerHTML = regioneschile [3][1]  
    foto = imagen.src="img/III.jpg"
}

function mostrarCoquimbo(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [4][0] 
    atractivo.innerHTML = regioneschile [4][1]  
    foto = imagen.src="img/IV.jpg"
}

function mostrarValpo(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [5][0] 
    atractivo.innerHTML = regioneschile [5][1]  
    foto = img.src="img/V.jpg"
}

function mostrarMetropolitana(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [6][0] 
    atractivo.innerHTML = regioneschile [6][1]
    foto = img.src="img/RM.jpg"  
}

function mostrarBernardoOhiggins(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [7][0] 
    atractivo.innerHTML = regioneschile [7][1]
    foto = img.src="img/VI.jpg" 
}

function mostrarMaule(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [8][0] 
    atractivo.innerHTML = regioneschile [8][1]
    foto = img.src="img/VII.jpg"  
}

function mostrarÑuble(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [9][0] 
    atractivo.innerHTML = regioneschile [9][1]  
    foto = img.src="img/VIII.jpg"  
}

function mostrarBioBio(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [10][0] 
    atractivo.innerHTML = regioneschile [10][1]
    foto = img.src="img/IX.jpg"    
}

function mostrarAraucania(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [11][0] 
    atractivo.innerHTML = regioneschile [11][1]
    foto = img.src="img/X.jpg"   
}

function mostrarRegionDeLosRios(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [12][0] 
    atractivo.innerHTML = regioneschile [12][1]
    foto = img.src="img/XI.jpg"   
}

function mostrarRegionDeLosLagos(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [13][0] 
    atractivo.innerHTML = regioneschile [13][1]  
    foto = img.src="img/XII.jpg" 
}

function mostrarAysen(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [14][0] 
    atractivo.innerHTML = regioneschile [14][1]  
    foto = img.src="img/XIII.jpg" 
}

function mostrarMagallanes(){
    contenedor.hidden=false
    titulo.innerHTML = regioneschile [15][0] 
    atractivo.innerHTML = regioneschile [15][1]  
    foto = img.src="img/XIV.jpg" 
}

