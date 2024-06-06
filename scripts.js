

// Funcion para cambiar el carrusel

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}

function mostrarContenido(seccion) {
    // Ocultar todas las secciones de contenido
    let secciones = document.querySelectorAll('.content-section');
    secciones.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    let sectionToShow = document.getElementById(seccion);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

function mostrarContenido(seccion, archivo) {
    // Ocultar todas las secciones de contenido
    let secciones = document.querySelectorAll('.content-section');
    secciones.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada si es "inicio"
    if (seccion === 'inicio') {
        document.getElementById(seccion).style.display = 'block';
    } else {
        // Cargar contenido dinámicamente en la sección de contenido
        fetch(archivo)
            .then(response => response.text())
            .then(text => {
                document.getElementById('contenido').innerHTML = text;
                document.getElementById('contenido').style.display = 'block';
            })
            .catch(error => {
                console.error('Error al cargar el archivo:', error);
            });
    }
}


