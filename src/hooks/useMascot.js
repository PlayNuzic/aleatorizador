/* global React */
(() => {
  // Evitem duplicats si el fitxer ja s'ha carregat abans
  if (window.useMascot) return;

  const { useState, useEffect } = React;

  function useMascot() {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    // Missatge de benvinguda (si no està mutejat)
    useEffect(() => {
      if (localStorage.getItem('mascotMuted') !== 'true') {
        setVisible(true);
        setMessage('¡Bienvenido!');
      }
    }, []);

    const show = msg => {
      if (localStorage.getItem('mascotMuted') === 'true') return;
      setMessage(msg);
      setVisible(true);
    };

    const hide = () => setVisible(false);

    return { message, visible, show, hide };
  }

  window.useMascot = useMascot;
})();
