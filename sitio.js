
document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // VARIABLES DEL DOM
  // ==============================

  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatbot = document.getElementById("chatbot");
  const closeChat = document.getElementById("close-chat");
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");

  // ==============================
  // ESTADO INICIAL
  // ==============================

  chatbot.style.display = "none";

  // ==============================
  // ABRIR CHAT
  // ==============================

  chatbotBtn.addEventListener("click", () => {
    chatbot.style.display = "block";
    chatInput.focus();
  });

  // ==============================
  // CERRAR CHAT
  // ==============================

  closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
  });

  // ==============================
  // ENVIAR CON ENTER
  // ==============================

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // ==============================
  // FUNCIÓN GLOBAL (BOTÓN)
  // ==============================

  window.sendMessage = function () {

    const message = chatInput.value.trim();

    if (message === "") return;

    addMessage(message, "user");
    chatInput.value = "";

    setTimeout(() => {
      const response = generateResponse(message);
      addMessage(response, "bot");
    }, 500);
  };

  // ==============================
  // AGREGAR MENSAJES AL CHAT
  // ==============================

  function addMessage(text, sender) {

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message");

    if (sender === "user") {
      messageContainer.classList.add("user-message");
      messageContainer.textContent = text;
    } else {
      messageContainer.classList.add("bot-message");
      messageContainer.textContent = text;
    }

    chatBody.appendChild(messageContainer);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // ==============================
  // LÓGICA DEL BOT
  // ==============================

  function generateResponse(input) {

    const text = input.toLowerCase();

    // SALUDOS
    if (text.includes("hola") || text.includes("buenas")) {
      return "👋 ¡Hola! Bienvenido a TecnoJuan.web. ¿Quieres aprender programación?";
    }

    // CURSO
    if (text.includes("curso") || text.includes("tutorial")) {
      return "📚 Puedes comenzar en la sección 'Tutorial' donde encontrarás los videos paso a paso.";
    }

    // HTML
    if (text.includes("html")) {
      return "💻 HTML es el lenguaje base de la web. Revisa el video 'Aprende HTML' en la sección del curso.";
    }

    // VIDEOS
    if (text.includes("video")) {
      return "🎥 En la sección 'Aprende en video' encontrarás contenido educativo disponible.";
    }

    // CONTACTO
    if (text.includes("contacto") || text.includes("correo")) {
      return "📧 Puedes escribir a: tecnobarca2015@gmail.com";
    }

    // GRACIAS
    if (text.includes("gracias")) {
      return "😊 ¡Con gusto! Estoy aquí para ayudarte.";
    }
    if (text.includes("hacer")) {
      return"Ve a ver los videos que están en la sección videos" 
    }
    if (text.includes("no se")) {
  return"no te preocupes 😉, sigue esfozándote y ve a ver los videos que ahí se explican bien los temas"
}
    if (text.includes("Los aliens existen")) {
  return"No se preguntale a ese cientifico loco"
}
    if (text.includes("hago")) {
  return"ve a ver los videos o contáctanos:nuestro correo es tecnobarca2015@gmail.com 👍"
}
    if (text.includes("67")) {
  return"das cringe"
}
    if (text.includes("ayúdame")) {
  return"Claro que si bro para eso estoy, ve a ver todos los videos, si no los entiendes solo dime"
}
   if (text.includes("no entiendo")) {
  return"no te preocupes,es normal, vuelve a intentarlo 😀"
}
    // RESPUESTA POR DEFECTO
    return "🤖 No entendí tu pregunta. Puedes preguntarme sobre el curso, HTML, videos o contacto.";
  }

});