const mensajesNo = [
    "¿En serio? 😏",
    "Piénsalo otra vez... 💭",
    "Esa no es la respuesta correcta 😂",
    "Yo sé que quieres decir que sí 😌",
    "Inténtalo otra vez 🤭",
    "No funciona ese botón 🙈",
    "Ese botón está deshabilitado por amor 💖"
];

// ================= BOTÓN NO =================

function activarBotonNo() {
    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseenter", moverBoton);
    noBtn.addEventListener("click", moverBoton);
}

function moverBoton() {
    const noBtn = document.getElementById("noBtn");

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    mostrarMensajeBromista();
}

function mostrarMensajeBromista() {
    const mensaje = document.createElement("div");
    mensaje.className = "mensaje-broma";
    mensaje.innerText = mensajesNo[Math.floor(Math.random() * mensajesNo.length)];

    mensaje.style.left = Math.random() * 80 + "%";
    mensaje.style.top = Math.random() * 80 + "%";

    document.body.appendChild(mensaje);

    setTimeout(() => mensaje.remove(), 1500);
}

// ================= MÚSICA =================

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const btn = document.getElementById("musicBtn");

    if (music.paused) {
        music.play()
            .then(() => {
                btn.innerHTML = "🔊";
            })
            .catch(err => {
                console.log("Error al reproducir:", err);
            });
    } else {
        music.pause();
        btn.innerHTML = "🎵";
    }
}

// ================= BOTÓN SÍ =================

function handleYes() {
    document.querySelector(".buttons-container").style.display = "none";
    document.getElementById("responseMessage").style.display = "block";

    const music = document.getElementById("backgroundMusic");

    music.volume = 0.6;
    music.play().catch(err => {
        console.log("No se pudo reproducir:", err);
    });

    // Lluvia intensa por 6 segundos
    crearLluviaRomantica(6000);
}

// ================= LLUVIA ROMÁNTICA =================

function crearLluviaRomantica(duracion = 5000) {

    const symbols = ["🌷", "🌹", "✨", "💖", "⭐", "💐"];
    const intervalo = 150;

    const lluvia = setInterval(() => {

        for (let i = 0; i < 25; i++) { // MÁS cantidad por ráfaga
            const drop = document.createElement("div");
            drop.className = "magic-drop";
            drop.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

            drop.style.left = Math.random() * 100 + "vw";
            drop.style.animationDuration = (Math.random() * 3 + 3) + "s";
            drop.style.fontSize = (Math.random() * 25 + 20) + "px";

            document.body.appendChild(drop);

            setTimeout(() => drop.remove(), 7000);
        }

    }, intervalo);

    setTimeout(() => {
    clearInterval(lluvia);

    // Después de que termina la lluvia
    mostrarEscenaFinal();

}, duracion);

}

// ================= BOTÓN ✨ (REACTIVABLE) =================

function startMagicRain() {
    // Cada vez que se presione vuelve a lanzar lluvia fuerte
    crearLluviaRomantica(5000);
}

function mostrarEscenaFinal() {
    const finalScene = document.getElementById("finalScene");

    finalScene.classList.add("active");
}


// ================= INICIO =================

window.addEventListener("load", activarBotonNo);
