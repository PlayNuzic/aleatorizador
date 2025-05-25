const { MascotOverlay, useMascot } = window;

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
