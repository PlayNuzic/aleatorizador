const { useState, useEffect } = React;

function SpeechBubble({ text }) {
  return (
    React.createElement('div', {
      className: 'speech-bubble',
      style: {
        background: 'white',
        color: 'black',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        marginLeft: '0.5rem'
      }
    }, text)
  );
}

function MascotOverlay({ message, visible, position }) {
  const [muted, setMuted] = useState(() => localStorage.getItem('mascotMuted') === 'true');

  useEffect(() => {
    localStorage.setItem('mascotMuted', muted);
  }, [muted]);

  if (!visible || muted) return null;
  const pos = position || { top: 10, left: 10 };
  return (
    React.createElement('div', {
      style: { position: 'fixed', top: pos.top, left: pos.left, zIndex: 1000, display: 'flex', alignItems: 'center' },
      'aria-label': 'Mascot overlay'
    },
      React.createElement('img', {
        src: 'mascot.png',
        alt: 'Mascot',
        style: { width: '80px', height: '80px' }
      }),
      React.createElement(SpeechBubble, { text: message }),
      React.createElement('button', {
        onClick: () => setMuted(true),
        style: { marginLeft: '0.5rem' },
        'aria-label': 'Mute mascot'
      }, '×')
    )
  );
}

window.MascotOverlay = MascotOverlay;
