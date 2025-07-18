
let baseDatos = JSON.parse(localStorage.getItem('baseIA')) || {
  "¿qué es java?": "Java es un lenguaje de programación de propósito general.",
  "¿quién fue albert einstein?": "Albert Einstein fue un físico teórico alemán."
};

function responder() {
  let pregunta = document.getElementById("pregunta").value.toLowerCase();
  let respuesta = baseDatos[pregunta];
  document.getElementById("respuesta").innerText = respuesta || "No sé la respuesta aún. ¡Enséñamela abajo!";
}

function agregarAprendizaje() {
  let nuevaP = document.getElementById("nuevaPregunta").value.toLowerCase();
  let nuevaR = document.getElementById("nuevaRespuesta").value;

  if (nuevaP && nuevaR) {
    baseDatos[nuevaP] = nuevaR;
    localStorage.setItem('baseIA', JSON.stringify(baseDatos));
    alert("Aprendido con éxito ✅");
    document.getElementById("nuevaPregunta").value = "";
    document.getElementById("nuevaRespuesta").value = "";
  } else {
    alert("Por favor, llena ambos campos.");
  }
}
