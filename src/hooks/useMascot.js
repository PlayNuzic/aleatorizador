import { useState, useEffect } from 'https://unpkg.com/react@17/umd/react.production.min.js';

export function useMascot() {
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
