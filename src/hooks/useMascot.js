/* eslint-env browser */
const { useState, useEffect, useRef } = React;

/**
 * Hook global per al sistema de mascota
 *
 *  - show(msg, secs = 4): mostra el missatge i desapareix automàticament.
 *  - hide(): amaga manualment.
 *  - mute(): no tornar a mostrar fins que l’usuari esborr(i) la clau “mascotMuted”.
 */
export function useMascot() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  /* Cada vegada que es recarrega la pàgina, tornem a saludar */
  useEffect(() => {
    const muted = localStorage.getItem('mascotMuted') === 'true';
    if (!muted) show('¡Bienvenido!');
    return () => clearTimeout(timerRef.current);
  }, []);

  function show(msg, secs = 4) {
    /** Evitem mostrar si està mutejat */
    if (localStorage.getItem('mascotMuted') === 'true') return;
    setMessage(msg);
    setVisible(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), secs * 1000);
  }

  function hide() {
    clearTimeout(timerRef.current);
    setVisible(false);
  }

  function mute() {
    localStorage.setItem('mascotMuted', 'true');
    hide();
  }

  return { message, visible, show, hide, mute };
}

/* exposem al window perquè mascot.js l’importi sense mòduls */
window.useMascot = useMascot;
