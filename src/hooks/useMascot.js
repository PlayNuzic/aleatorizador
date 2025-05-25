// src/hooks/useMascot.js
const { useState, useEffect } = React;

/**
 * Hook que gestiona missatge, visibilitat i “mute”
 */
function useMascot() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  /** mostra el missatge (i el tanca opcionalment en X segons) */
  const show = (msg = '👋 Hola!', autoHideSec = 4) => {
    if (localStorage.getItem('mascotMuted') === 'true') return;
    setMessage(msg);
    setVisible(true);
    if (autoHideSec > 0) setTimeout(() => setVisible(false), autoHideSec * 1000);
  };

  /** amaga-lo immediatament */
  const hide = () => setVisible(false);

  // missatge inicial
  useEffect(() => {
    if (localStorage.getItem('mascotMuted') !== 'true') show('¡Bienvenido!', 4);
  }, []);

  return { message, visible, show, hide };
}

// exposem al global perquè altres scripts el puguin agafar
window.useMascot = useMascot;
