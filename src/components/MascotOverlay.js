/* src/components/MascotOverlay.js */
const { useState, useEffect } = React;

function MascotOverlay({ message, visible, hide, mute }) {
  if (!visible) return null;

  return (
    React.createElement(
      'div',
      { className: 'mascot-overlay' },
      React.createElement('span', null, message),
      React.createElement(
        'button',
        { className: 'mascot-close', onClick: hide, title: 'Cerrar' },
        '✕'
      ),
      React.createElement(
        'button',
        { className: 'mascot-mute', onClick: mute, title: 'No volver a mostrar' },
        '🔇'
      )
    )
  );
}

window.MascotOverlay = MascotOverlay;
