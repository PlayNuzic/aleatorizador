// React is loaded globally via CDN
const { useState, useEffect } = React;

function useMascot() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const muted = localStorage.getItem('mascotMuted') === 'true';
    if (!muted) {
      setVisible(true);
      setMessage('Bienvenido!');
    }
  }, []);

  const show = (msg, pos) => {
    if (localStorage.getItem('mascotMuted') === 'true') return;
    setMessage(msg);
    setVisible(true);
  };

  const hide = () => setVisible(false);

  return { message, visible, show, hide };
}

// expose globally
window.useMascot = useMascot;
