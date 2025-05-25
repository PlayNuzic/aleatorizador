/* js/mascot.js */
const { MascotOverlay, useMascot } = window;

function MascotRoot() {
  const api = useMascot();          // { message, visible, show, hide, mute }
  window.triggerMascot = api.show;  // expose for console / other code
  return React.createElement(MascotOverlay, api);
}

ReactDOM.render(
  React.createElement(MascotRoot),
  document.getElementById('mascot-root')
);
