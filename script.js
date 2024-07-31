let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
   if(menuVisible){
       document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
   }
}

function seleccionar(){
   //oculta el menu una vez que selecciono una opcion
   document.getElementById("nav").classList = "";
   menuVisible = false;
}

//funcion que aplica las animaciones a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("teamwork");
        habilidades[1].classList.add("communication");
        habilidades[2].classList.add("problemresolution");
        habilidades[3].classList.add("fastlearning");
        habilidades[4].classList.add("motivation");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de las habilidades
window.onscroll = function(){
    efectoHabilidades();
}