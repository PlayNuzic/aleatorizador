/* src/hooks/useMascot.js */
// React globals
const { useState, useEffect } = React;

function useMascot() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  // mostra la benvinguda només si l’usuari no ha silenciat
  useEffect(() => {
    if (localStorage.getItem('mascotMuted') === 'true') return;
    setMessage('¡Bienvenido!');
    setVisible(true);
  }, []);

  const show  = (msg, seconds = 4) => {
    if (localStorage.getItem('mascotMuted') === 'true') return;
    setMessage(msg);
    setVisible(true);
    if (seconds) setTimeout(() => setVisible(false), seconds * 1000);
  };
  const hide  = () => setVisible(false);
  const mute  = () => { localStorage.setItem('mascotMuted', 'true'); hide(); };
  const unmute = () => localStorage.removeItem('mascotMuted');

  return { message, visible, show, hide, mute, unmute };
}

// exposem globalment per als altres scripts
window.useMascot = useMascot;
