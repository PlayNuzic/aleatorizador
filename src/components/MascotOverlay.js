// src/components/MascotOverlay.js
(function (g) {
  const { useEffect } = React;

  function MascotOverlay({ message, visible, onClose, lottieSrc }) {
    const style = {
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      zIndex: 9999,
      display: visible ? 'flex' : 'none',
      alignItems: 'center',
      gap: '.5rem',
      background: '#EEE8D8',
      color: '#43433B',
      borderRadius: '8px',
      padding: '.6rem 1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,.2)',
      maxWidth: '240px',
      fontFamily: 'Ubuntu, sans-serif'
    };

    // Carrega / re-carrega l’animació Lottie quan canvie l’element <svg>
    useEffect(() => {
      if (!lottieSrc || !visible) return;
      const container = document.getElementById('mascot-lottie');
      if (!container) return;

      // neteja qualsevol instància existent
      container.innerHTML = '';
      // eslint-disable-next-line no-undef
      lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: lottieSrc
      });
    }, [visible, lottieSrc]);

    return React.createElement(
      'div',
      { style },
      React.createElement('div', { id: 'mascot-lottie', style: { width: 64, height: 64 } }),
      React.createElement('span', null, message),
      React.createElement(
        'button',
        {
          style: {
            marginLeft: 'auto',
            background: '#E76F68',
            border: 'none',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
            width: 24,
            height: 24,
            lineHeight: '24px',
            textAlign: 'center'
          },
          onClick: onClose
        },
        '✕'
      )
    );
  }

  // exposa globalment
  g.MascotOverlay = MascotOverlay;
})(window);
