# Generador Modular de Melodías (aleatorizador)

![demo](./images/screenshot.png) <!-- opcional, si vols afegir una captura -->

Aplicació web autosuficient que permet generar, editar i escoltar patrons
melòdics de forma modular sobre qualsevol escala o mode.
Es distribueix com a **site estàtic** (tot és HTML + CSS + JS a l’arrel del
repo) i es publica automàticament a **GitHub Pages**:

> https://playnuzic.github.io/aleatorizador/

---

## Funcionalitats principals

| bloc | resum |
| ---- | ----- |
| **Motor de generació** | genera files de 8 notes a partir de vistes Na/Nm/Nº, intervals modulars o de grau. |
| **Editor in-place** | doble clic a una casella ➜ edició del valor; es recalculen notes posteriors. |
| **Escales i modes** | Rotació lliure de qualsevol mare (*Crom*, *Diat*, *Arm Menor*, etc.). |
| **Playback** | Synth bàsic amb *Web Audio*; botó ▶ per fila, BPM ajustable. |
| **Presets ràpids** | Barra de 8 memòries (Alt + clic esborra, Shift + clic desa). |
| **Mascota Lottie** | Mascota animada amb globus de text, que es pot cridar des del codi o silenciar (guarda estat a *localStorage*). |

---

## 🐾 Mascota (Lottie)

La mascota es defineix en:

* `src/hooks/useMascot.js` – hook que gestiona estat, *mute*, temporitzador, etc.  [oai_citation:0‡useMascot.js](file-service://file-Hh3MvNeNSh2ctyF44wBR2r)  
* `src/components/MascotOverlay.js` – overlay amb la imatge/animació i la bombolla de text.  [oai_citation:1‡MascotOverlay.js](file-service://file-2aUQzCVyaxYPR1UTzUUMXx)  
* `js/mascot.js` – monta el React root, exporta la API global.  [oai_citation:2‡mascot.js](file-service://file-NmhQX1RBRB8VACYGESPVuP)  

### API global

Un cop carregada la pàgina disposes de:

```js
// mostra el missatge durant `secs` segons (per defecte 4 s)
triggerMascot("Hola món 👋", 6);

// amaga immediatament la mascota
hideMascot();

Si l’usuari prem ✖︎ o executa localStorage.setItem('mascotMuted','true')
la mascota ja no apareixerà fins que es faci unmute esborrant la clau.

Desenvolupament
1. Clonar i instal·lar depenències opcionals
git clone https://github.com/PlayNuzic/aleatorizador.git
cd aleatorizador
npm ci   # opcional – només si vols executar tests o linter

2. Servidor local
python3 -m http.server 8000

3. Tests
npm test          # només conté un placeholder; Jest està al package.json

Entorn OpenAI Codex

Es pot fer push directament des de l’entorn de Codex.
	1.	A Settings → Environments crea un entorn i afegeix el secret GITHUB_TOKEN
amb permisos repo.
	2.	Utilitza el setup.sh del repo per preparar Git, Node i pinxar el token.
	3.	Cada sessió de Codex quedarà llesta per a git add/commit/push.

Recorda que, un cop acaba el setup.sh, la sessió perd accés a internet;
totes les dependències que necessitis s’han d’instal·lar dins del setup.

Llicència

GPL-3.0 – © PlayNuzic
