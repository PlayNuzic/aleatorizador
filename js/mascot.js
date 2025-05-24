import React from 'https://unpkg.com/react@17/umd/react.production.min.js?module';
import ReactDOM from 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js?module';
import MascotOverlay from '../src/components/MascotOverlay.jsx';
import { useMascot } from '../src/hooks/useMascot.js';

function MascotRoot() {
  const { message, visible, show } = useMascot();

  // expose show function globally for demo
  window.triggerMascot = show;

  return React.createElement(MascotOverlay, { message, visible });
}

ReactDOM.render(
  React.createElement(MascotRoot),
  document.getElementById('mascot-root')
);
