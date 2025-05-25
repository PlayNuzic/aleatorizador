// React is provided globally via CDN <script> tags
const { useState, useEffect } = React;

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

// expose hook on the window for non-module usage
window.useMascot = useMascot;
