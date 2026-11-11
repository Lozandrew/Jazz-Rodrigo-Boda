/* ════════════════════════════════════════════════════════════
CONFIGURACIÓN DEL EVENTO · Edita SOLO este archivo por cliente
════════════════════════════════════════════════════════════ */
const CONFIG = {
  textos: {
    tituloPagina:       "Jazz & Rodrigo  | Encuentra tu Mesa",
    titulo:             "Jazz & Rodrigo",
    instrucciones:      "Ingresa tu nombre y apellido para conocer tu mesa:",
    placeholder:        "Ej. Otilia Valtierra",
    botonBuscar:        "Buscar Mesa",
    botonRegresar:      "Buscar nuevo invitado",
    bienvenida:         "¡Qué alegría contar con tu presencia!",
    bienvenidaAnfitriona: "¡Hoy es tu noche!",
    alertaVacio:        "Por favor escribe un nombre",
    errorNombre:        "No encontramos ese nombre exacto en la lista 😢",
    errorHint:          "Por favor, verifica la ortografía.",

    // Plantillas actualizadas:
    mensajeMesa:       '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa {mesa}</strong><span class="table-name">{tableName}</span>',
    mensajeAnfitriona: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa de {mesa}</strong><span class="table-name">{tableName}</span><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeAnfitrionaNumero: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeNinos:      '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><span class="table-name">{tableName}</span><br><br><span class="aviso-ninos">{avisoNinos}</span>',
    extraAnfitriona:   '✨ ¡Disfruta al máximo tu fiesta! ✨',
    avisoNinos:        'Pregunta por el servicio de niñeras',
  },

  especiales: {
    anfitriones: ["Jazz","Rodrigo"],
    mesasNinos: ["ninos", "niños"],
  },

  datos: {
    urlInvitados: "https://api.jsonbin.io/v3/b/6af49eedffd5d16053b9e406/latest",
  },

  tema: {
    colores: {
      primario:         "#6B8FB5",
      acento:           "#C9A96E",
      instrucciones:    "#9B8FB5",
      fondo:            "#F0EDE8",
      tarjeta:          "rgba(255, 255, 255, 0.80)",
      bordeTarjeta:     "rgba(107, 143, 181, 0.15)",
      texto:            "#3D4F6F",
      borde:            "#D5D0E0",
      inputFondo:       "#FAFAF8",
      separador:        "#E5E0EB",
      sugerenciasHover: "rgba(107, 143, 181, 0.12)",
      error:            "#B57A8F",
      errorHint:        "#8FA87A",
      aviso:            "#9B8FB5",
    },
    fuentes: {
      titulo: { nombre: "Cinzel", pesos: "400;500" },
      texto:  { nombre: "Inter", pesos: "300;400;600" },
    },
    imagenes: {
      fondo:          "imagenes/fondo-app.jpg",
      croquis:        "imagenes/croquis-{mesa}.jpg",
      croquisGeneral: "imagenes/croquis-general.jpg",
    },
  },
};