/* global React */
(() => {
  if (window.MascotOverlay) return;

  const { useState } = React;

  function SpeechBubble({ text }) {
    return React.createElement(
      'div',
      { className: 'speech-bubble' },
      text
    );
  }

  function MascotOverlay({ message, visible, position }) {
    const [muted, setMuted] = useState(
      () => localStorage.getItem('mascotMuted') === 'true'
    );

    if (!visible || muted) return null;

    const pos = position || { top: 10, left: 10 };

    return React.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          ...pos,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center'
        }
      },
      // imatge mascota
      React.createElement('img', {
        src: 'mascot.png',
        width: 80,
        height: 80,
        alt: 'Mascot'
      }),
      // bombolla de text
      React.createElement(SpeechBubble, { text: message }),
      // botó mute
      React.createElement(
        'button',
        {
          'aria-label': 'Mute mascot',
          onClick: () => {
            setMuted(true);
            localStorage.setItem('mascotMuted', 'true');
          },
          style: { marginLeft: 4 }
        },
        '×'
      )
    );
  }

  window.MascotOverlay = MascotOverlay;
})();
