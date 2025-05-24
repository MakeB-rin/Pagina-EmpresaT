// Barra de sticky
$(document).ready(function () {
    $(".sub-btn").click(function() {
        $(this).next(".sub-menu").slideToggle();
    });


    $(".more-btn").click(function() {
        $(this).next(".more-menu").slideToggle();
    });

    var menu = document.querySelector(".menu");
    var menuBtn = document.querySelector(".menu-btn");
    var closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
        menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
});

// navbar al bakar con el scroll negro
window.onscroll = function(){
    stickyNavbar();
};

let navbar = document.querySelector('header');
let sticky = navbar.offsetTop;

function stickyNavbar(){
    if(window.pageYOffset > sticky){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');  
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Quitar observación para que solo se animen una vez
            }
        });
    }, {
        threshold: 0.2 // Puedes ajustar esto para animar más pronto o más tarde
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});


window.addEventListener("load", () => {
    const html = document.documentElement;
    const body = document.body;
    const isIndex = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

    const header = document.querySelector("header");
    const content = document.querySelector(".content");
    const video = document.querySelector("video");
    const introSection = document.querySelector(".intro"); // Seleccionamos la sección de texto

    const setScroll = (enabled) => {
        const value = enabled ? "auto" : "hidden";
        html.style.overflow = value;
        body.style.overflow = value;
    };

    const showHeader = () => {
        if (header) {
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
        }
    };

    const hideHeader = () => {
        if (header) {
            header.style.opacity = "0";
            header.style.transform = "translateY(-20px)";
        }
    };


    // Verifica si ya se mostró la intro en esta sesión
    // Detecta si la página fue cargada directamente o recargada
    const introShown = sessionStorage.getItem("introShown");
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isFreshVisit = navEntry?.type === "navigate" || navEntry?.type === "reload";

    if (isIndex && isFreshVisit && !introShown) {
        hideHeader();
        if (introSection) {
            introSection.style.opacity = "0"; 
            introSection.style.transform = "translateY(20px)"; 
        }
        setScroll(false);

        setTimeout(() => {
            showHeader();

            if (introSection) {
                introSection.style.opacity = "1"; 
                introSection.style.transform = "translateY(0)";
                introSection.style.transition = "opacity 1s ease, transform 1s ease"; 
            }
            if (content) content.classList.add("visible");
            if (video) video.play();

            setScroll(true);
            sessionStorage.setItem("introShown", "true");
        }, 2000);
    } else {
        showHeader();
        if (introSection) {
            // Asegura que la sección de texto se muestre
            introSection.style.opacity = "1"; 
            introSection.style.transform = "translateY(0)";
            introSection.style.transition = "opacity 1s ease, transform 1s ease"; 
        }
        if (content) content.classList.add("visible");
        setScroll(true);
    }
});


// Collage de imagenes
function mostrarImagen(src) {
    const modal = document.getElementById("modal");
    const imgGrande = document.getElementById("img-grande");
    imgGrande.src = src;
    modal.classList.add("active");
  }

  function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("active");
}
  
//  Cerrar la ventana modal ESC
document.addEventListener("keydown", function(event) {
    const modal = document.getElementById("modal");
    if (event.key === "Escape" && modal.classList.contains("active")) {
      cerrarModal();
    }
  });


// Animacion banner
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2 
    });

    // Añadir la clase `animate-on-scroll` a los banners
    document.querySelectorAll('.banner-zoom').forEach(el => {
        observer.observe(el);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            const offset = 120; // Altura del header fijo
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// Objeto con las traducciones
const translations = {
    es: {
        // index
        "home": "Inicio",
        "about": "Sobre LAIG",
        "brands": "Marcas",
        "rse": "RSE",
        "parrafo1": "Conectando el arte, la aventura y la conservacion de Bolivia con el mundo",
        "parrafo2": "Exportacion ética | Turismo sostenible | Conservación con impacto",
        "parrafo3": "El turismo es una danza entre el alma y el mundo, un deleite de los sentidos que revela no solo paisajes deslumbrantes, sino también las historias y secretos que laten en cada rincón, invitando a quien lo vive a descubrirse a sí mismo en el proceso.",
        "button1": "DESCUBRE NUESTRA VISION",
        "service": "Servicios",
        "contact": "Contactanos",
        // Nosotros
        "title1": "SOBRE LATIN AMERICAN INVESTMENT GROUP",
        "subtitle1": "Más que un grupo: un legado para Bolivia", 
        "mission": "Misión", 
        "parrafo4": "La conservación ambiental, generando desarrollo a través de la exportación de arte ancestral, el turismo sostenible y económico inclusivo y preservando nuestro legado para las futuras generaciones",
        "vision": "Visión",
        "parrafo5": "Ser el referente internacional en la integración de cultura, turismo y sostenibilidad, inspirando un modelo de negocio donde el éxito comercial y el impacto positivo en Bolivia caminen de la mano",  
        "sustainability": "Sostenibilidad", 
        "valor1": "Respeto al medio ambiente y regeneración de ecosistemas.", 
        "integrity": "Integridad", 
        "valor2": "Comercio justo y transparencia en cada acción.", 
        "cultural": "Orgullo Cultural", 
        "valor3": "Difusión de la diversidad boliviana.", 
        "innovation": "Innovación", 
        "valor4": "Tradición + tecnología para soluciones creativas.", 
        "social": "Compromiso Social", 
        "valor5": "Crecimiento compartido con comunidades.", 
        "parrafo6": "Exportando arte boliviano con calidad y ética desde 2010",
        "parrafo7": "Turismo responsable en los mejores destinos de Bolivia",
        "parrafo8": "Protegiendo la biodiversidad y comunidades desde 2015",
        // Marcas
        "button2": "VISITANOS",
        "card1": "Gracias a BOLIVIAN HANDICRAFT, nuestra comunidad tíene futuro dígno.",
        "persona1": "- Juana, artesana aymara.",
        "card2": "VORTEX TOURS nos mostró la Bolivia autentíca.",
        "persona2": "- Klaus y sofia, Germany.",
        "card3": "VORTEX TOURS nos mostró la Bolivia autentíca.",
        "persona3": "- Amigos",
        "card4": "Gracias a BOLIVIAN HANDICRAFT, nuestra comunidad tíene futuro dígno.",
        "persona4": "- Carlos, artesano aymara.",
        //RSE
        "title-rse": "RESPONSABILIDAD SOCIAL CORPORATIVA (RSE)",
        "subtitle-rse": "Nuestro éxito se mide en sonrisas y acres verdes.",
        "community1":"IMPACTO COMUNITARIO",
        "community2":"SOSTENIBILIDAD AMBIENTAL",
        "community3":"CULTURA VIVA",
        "texto-rse1": "Artesanas empoderadas: 80% mujeres rurales. Guías turísticos capacitados: 200 en 2023. Familias beneficiadas por la Fundación Andy: 1200+.",
        "texto-rse2": "BOLIVIAN HANDICRAFT 40% de reducción en la huella de carbono (vs. 2020), VORTEX TOURS El 90% de los tours están libres de plásticos de un solo uso.",
        "texto-rse3": "Festivales apoyados: El evento cultural respaldado se encuentran el majestuoso Carnaval de Oruro. y el tradicional Pulljay de Tarabuco, una colorida celebración que honra las raíces indígenas.",
        "texto-rse4": "\"En <span style=\"color:#FAAF40\">Latin American Investment Group</span> el <span style=\"color:#FAAF40\">20%</span> de nuestras utilidades se reinvierte en proyectos <span style=\"color:#FAAF40\">sociales</span> y <span style=\"color:#FAAF40\">ambientales</span>.\""
    },
    en: {
        // index
        "home": "Home",
        "about": "About LAIG",
        "brands": "Brands",
        "rse": "RSE",
        "parrafo1": "Connecting Bolivian Art, Adventure, and Conservation with the World",
        "parrafo2": "Ethical Exports | Sustainable Tourism | Impactful Conservation",
        "parrafo3": "Tourism is a dance between the soul and the world, a delight for the senses that reveals not only dazzling landscapes but also the stories and secrets that lurk in every corner, inviting those who experience it to discover themselves in the process.",
        "button1": "DISCOVER OUR VISION",  
        "service": "Services", 
        "contact": "Contact",  
         // Nosotros
        "title1": "ABOUT LATIN AMERICAN INVESTMENT GROUP",  
        "subtitle1": "More than a group: a legacy for Bolivia", 
        "mission": "Mission", 
        "parrafo4": "Environmental conservation, generating development through the export of ancestral art, sustainable and inclusive economic tourism, and preserving our legacy for future generations.",
        "vision": "Vision",  
        "parrafo5": "To be the international benchmark in the integration of culture, tourism, and sustainability, inspiring a business model where commercial success and positive impact in Bolivia go hand in hand.",
        "sustainability": "Sustainability", 
        "valor1": "Respect for the environment and regeneration of ecosystems.", 
        "integrity": "Integrity", 
        "valor2": "Fair trade and transparency in every action.", 
        "cultural": "Cultural Pride", 
        "valor3": "Dissemination of Bolivian diversity.", 
        "innovation": "Innovation", 
        "valor4": "Tradition + technology for creative solutions.", 
        "social": "Social Commitment", 
        "valor5": "Shared growth with communities.", 
        "parrafo6": "Exporting Bolivian art with quality and ethics since 2010",
        "parrafo7": "Responsible tourism in Bolivia's best destinations",
        "parrafo8": "Protecting biodiversity and communities since 2015",
        // Marcas
        "button2": "VISIT US",
        "card1": "Thanks to BOLIVIAN HANDICRAFT, our community has a dignified future.",
        "persona1": "- Juana, artesana aymara.",
        "card2": "VORTEX TOURS showed us the authentic Bolivia.",
        "persona2": "- Klaus y sofia, Germany.",
        "card3": "VORTEX TOURS showed us the authentic Bolivia.",
        "persona3": "- Friends.",
        "card4": "Thanks to BOLIVIAN HANDICRAFT, our community has a dignified future.",
        "persona4": "- Carlos, artesano aymara.",
        //RSE
        "title-rse": "CORPORATE SOCIAL RESPONSIBILITY (RSE)",
        "subtitle-rse": "Our success is measured in smiles and green acres.",
        "community1":"COMMUNITY IMPACT",
        "community2":"ENVIRONMENTAL SUSTAINABILITY",
        "community3":"LIVING CULTURE",
        "texto-rse1": "Empowered artisans: 80% rural women,  Trained tour guides: 200 in 2023, Families benefited by the Andy Foundation: 1200+.",
        "texto-rse2": "BOLIVIAN HANDICRAFT 40% reduction in carbon footprint (vs. 2020), VORTEX TOURS 90% of tours are free of single-use plastics.",
        "texto-rse3": "Supported Festivals: Supported cultural events include the majestic Oruro Carnival and the traditional Pulljay de Tarabuco, a colorful celebration honoring indigenous roots.",
        "texto-rse4": "\"At <span style=\"color:#FAAF40\">Latin American Investment Group</span>, 20% of our profits are reinvested in <span style=\"color:#FAAF40\">social</span> and <span style=\"color:#FAAF40\">environmental projects.</span> \""
    }
};
    // Función para cambiar el idioma
function changeLanguage(language) {
    // Actualiza los elementos del contenido
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[language] && translations[language][key]) {
            element.innerHTML  = translations[language][key];
        }
    });
}

// Evento para los botones de idioma
document.querySelectorAll('.sub-item a').forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.getAttribute('data-language');
        localStorage.setItem('lang', lang)
        changeLanguage(lang);
    });
});

// Detecta el idioma guardado al refrescar la página
window.addEventListener('DOMContentLoaded', () => {
    const navEntries = performance.getEntriesByType('navigation');
    const isReload = navEntries.length && navEntries[0].type === 'reload';
    if (isReload) {
        const savedLang = localStorage.getItem('lang') || 'en';
        changeLanguage(savedLang);
    }
});

/*texto*/  
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.centered-container');
    // Función para activar la animación cuando el contenedor esté visible
    function checkAnimation() {
      const rect = container.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isInView) {
        container.classList.add('animate');
      }
    }
    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); // Para que funcione cuando ya esté visible al cargar
  });

  /**/ 
  // Obtenemos todas las imágenes
const imagenes = document.querySelectorAll('.img-container');

// Función para verificar si las imágenes están dentro del viewport
function verificarVisibilidad() {
  imagenes.forEach(imagen => {
    const rect = imagen.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      imagen.classList.add('visible');
    }
  });
}

// Llamamos a la función al cargar la página y al hacer scroll
window.addEventListener('scroll', verificarVisibilidad);
window.addEventListener('load', verificarVisibilidad);

//cambiar estado de las banderas//
document.addEventListener("DOMContentLoaded", () => {
const selectedFlag = document.getElementById("selected-flag");
const switchLanguage = document.getElementById("switch-language");
const otherFlag = document.getElementById("other-flag");

switchLanguage.onclick = e => {
    e.preventDefault();

    // Intercambia las imágenes
    [selectedFlag.src, otherFlag.src] = [otherFlag.src, selectedFlag.src];

    // Detecta nuevo idioma según la bandera principal
    const newLang = selectedFlag.src.includes("/es.png") ? "es" : "en";

    // Cambia el idioma con tu función
    changeLanguage(newLang);
    // Guarda el idioma solo para la sesión
    localStorage.setItem("language", newLang);
};

// NUEVO: leer idioma guardado
    const savedLang = localStorage.getItem("language") || "en";

    // Ajustar banderas según idioma guardado
    if (savedLang === "es") {
        selectedFlag.src = "https://flagcdn.com/w40/es.png";
        otherFlag.src = "https://flagcdn.com/w40/us.png";
    } else {
        selectedFlag.src = "https://flagcdn.com/w40/us.png";
        otherFlag.src = "https://flagcdn.com/w40/es.png";
    }

    // Aplicar idioma guardado
    changeLanguage(savedLang);
});

