
function buscarWikipedia() {
  const pregunta = document.getElementById("pregunta").value.trim();
  const respuestaDiv = document.getElementById("respuesta");
  if (!pregunta) return alert("Escribe una pregunta primero");

  const query = encodeURIComponent(pregunta);
  const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${query}`;

  respuestaDiv.innerText = "Buscando en Wikipedia...";

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("No se encontró la respuesta.");
      return response.json();
    })
    .then(data => {
      if (data.extract) {
        respuestaDiv.innerHTML = `<strong>${data.title}:</strong><br>${data.extract}`;
      } else {
        respuestaDiv.innerText = "No se encontró información en Wikipedia.";
      }
    })
    .catch(err => {
      respuestaDiv.innerText = "❌ Error al buscar: " + err.message;
    });
}
