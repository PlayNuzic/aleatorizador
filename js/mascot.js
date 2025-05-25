// React and ReactDOM are loaded globally via CDN
const MascotOverlay = window.MascotOverlay;
const useMascot = window.useMascot;

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
