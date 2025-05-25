// js/mascot.js
// Rebem referències del window (evitem redeclarar identifiers)
const MascotOverlay = window.MascotOverlay;
const useMascotHook = window.useMascot;

function MascotRoot() {
  const { message, visible, show, hide } = useMascotHook();
  // expose global API quan el hook s’instancia
  window.triggerMascot = show;
  window.hideMascot    = hide;
  return React.createElement(MascotOverlay, { message, visible, hide });
}

// render
ReactDOM.render(
  React.createElement(MascotRoot),
  document.getElementById('mascot-root')
);
