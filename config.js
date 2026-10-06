/* ════════════════════════════════════════════════════════════
   CONFIGURACIÓN DEL EVENTO · Edita SOLO este archivo por cliente
   ════════════════════════════════════════════════════════════ */
const CONFIG = {

  textos: {
    tituloPagina:       "Nayeli & Israel  | Encuentra tu Mesa",  // pestaña del navegador
    titulo:             "Nayeli & Israel",
    instrucciones:      "Ingresa tu nombre y apellido para conocer tu mesa:",
    placeholder:        "Ej. Nayeli Landell",
    botonBuscar:        "Buscar Mesa",
    botonRegresar:      "Buscar nuevo invitado",
    bienvenida:         "¡Qué alegría contar con tu presencia!",
    bienvenidaAnfitriona: "¡Hoy es tu noche!",
    alertaVacio:        "Por favor escribe un nombre",
    errorNombre:        "No encontramos ese nombre exacto en la lista 😢",
    errorHint:          "Por favor, verifica la ortografía.",

    // Plantillas: {nombre} y {mesa} se reemplazan solos
    mensajeMesa:       '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa {mesa}</strong>',
    mensajeAnfitriona: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa de {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeNinos:      '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><br><br><span class="aviso-ninos">{avisoNinos}</span>',
    extraAnfitriona:   '✨ ¡Disfruta al máximo tu fiesta! ✨',
    avisoNinos:        'Pregunta por el servicio de niñeras',
  },

  especiales: {
    anfitriones: ["Israel Jimenez Lorant","Nayeli Landell Rivera"],        // festejado(a): quinceañera, novios, graduado…
    mesasNinos: ["ninos", "niños"],     // mesas con aviso especial y sin croquis
  },

  datos: {
    urlInvitados: "https://api.jsonbin.io/v3/b/6ac55961ac6210605a1a5c86/latest",
},
/*
  tema: {
    colores: {
      // Colores principales de la marca
          primario:         "#8B1A1A",                    // tinto/vino - elegancia, títulos, botones
          acento:           "#D4A017",                    // dorado - números de mesa, highlights
          instrucciones:    "#C8622D",                    // terracota - texto instruccional
          
          // Fondos y superficies
          fondo:            "#FAF3EE",                    // crema cálido
          tarjeta:          "rgba(255, 255, 255, 0.85)", // blanco semi-transparente
          bordeTarjeta:     "rgba(212, 175, 55, 0.15)",  // dorado suave
          
          // Textos y bordes
          texto:            "#3D1F1F",                    // tinto muy oscuro (legible)
          borde:            "#E8D5C5",                    // beige cálido
          
          // Inputs y formularios
          inputFondo:       "#FFFFFF",                    // blanco puro
          separador:        "#F5EBE0",                    // crema muy claro
          
          // Estados y feedback
          sugerenciasHover: "rgba(114, 47, 55, 0.12)",   // tinto transparente
          error:            "#C94C6E",                    // rosa - errores
          errorHint:        "#9B9B4A",                    // verde oliva - hint
          aviso:            "#9B9B4A",                    // verde oliva - mensajes
    },
    */

  tema: {
  colores: {
    // Colores principales de la marca
    primario:         "#6B6B3A",                    // olivo - natural, elegante
    acento:           "#D4A017",                    // dorado - números de mesa, highlights
    instrucciones:    "#C8622D",                    // terracota - texto instruccional
    
    // Fondos y superficies
    fondo:            "#F7F5EE",                    // crema con tinte verdoso muy suave
    tarjeta:          "rgba(255, 255, 255, 0.85)", // blanco semi-transparente
    bordeTarjeta:     "rgba(155, 155, 74, 0.15)",  // olivo suave
    
    // Textos y bordes
    texto:            "#3D3D1A",                    // olivo muy oscuro (legible)
    borde:            "#E2DFD0",                    // beige verdoso
    
    // Inputs y formularios
    inputFondo:       "#FFFFFF",                    // blanco puro
    separador:        "#EEEBE0",                    // crema muy claro
    
    // Estados y feedback
    sugerenciasHover: "rgba(155, 155, 74, 0.15)",  // olivo transparente
    error:            "#C94C6E",                    // rosa - errores
    errorHint:        "#C8622D",                    // terracota - hint
    aviso:            "#6B2D5B",                    // púrpura - mensajes informativos
  },
    fuentes: {
      titulo: { nombre: "Cinzel",     pesos: "400;500" },
      texto:  { nombre: "Inter", pesos: "300;400;600" },
    },
    imagenes: {
      fondo:          "imagenes/fondo-app.jpg?v=1",
      croquis:        "imagenes/croquis-{mesa}.jpg",   // {mesa} = número de mesa
      croquisGeneral: "imagenes/croquis-general.jpg",
    },
  },
};

