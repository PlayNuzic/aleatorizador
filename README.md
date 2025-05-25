# Generador Modular de Melodies 🎲🎵

Aplicació web (HTML + CSS + JS pur) per generar melodies aleatòries
segons escales mare, rotacions i interval·lística modular.

## Novetats 2025-05-25

| 🔥   | Funcionalitat                                                                                       |
|------|-----------------------------------------------------------------------------------------------------|
| 🦜   | **Mascota React + Lottie** (component `MascotOverlay`) amb bombolla de text.                        |
| 🎮   | Globals `triggerMascot(msg, autoHideSec)` i `hideMascot()` exposades per a ús extern (consola/API). |
| 🚫   | La mascota respecta `localStorage.mascotMuted` i es pot “mutar” permanentment amb la `×`.            |
| 🎨   | Lottie es carrega automàticament des de **`src/assets/mascot.json`**.                               |
| 🗂️   | Estructura clara → `src/hooks`, `src/components`, `js/`, `css/`…                                    |

---

## 📂 Estructura de carpetes
.
├── css/                 # Estil global de l’app
├── js/
│   ├── app.js           # Lògica generador de melodies (sense frameworks)
│   └── mascot.js        # Bootstrap React de la mascota
├── src/
│   ├── hooks/useMascot.js
│   ├── components/MascotOverlay.js
│   └── assets/mascot.json
├── tests/               # Placeholder tests per Codex (Jest disabled)
├── favicon.ico
├── index.html
└── setup.sh             # Script universal per a Codex
---

## 🚀 Ús ràpid

1. **Obre `index.html`** amb Live Server, VS Code, `python -m http.server`, etc.
2. La mascota saluda (“¡Bienvenido!”) i desapareix en 4 s.
3. Des de la consola Chrome/Firefox pots:
   ```js
   triggerMascot("Hola des de consola 👋", 6);  // mostra 6 s
   hideMascot();                                // amaga immediatament
   localStorage.removeItem('mascotMuted');      // torna a activar-la

## 🔧 Desenvolupament

git clone https://github.com/PlayNuzic/aleatorizador.git
cd aleatorizador
# servidor estàtic (ex. node http-server, live-server, python, ...)

## 🖥️ Entorn Codex

L’script setup.sh configura:
	•	Git via PAT (GITHUB_TOKEN)
	•	Eines bàsiques (git, curl, jq, npm, corepack)
	•	Instal·lació “offline” de jest, rome, live-server, etc. (sense xarxa després del setup)

Per executar Codex:
chmod +x setup.sh && ./setup.sh    # un cop clonat el repo

## ℹ️ Llicència

GPL-3.0
