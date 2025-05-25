/* global React, ReactDOM */
(() => {
  const { MascotOverlay, useMascot } = window;
  if (!MascotOverlay || !useMascot) return;

  function MascotRoot() {
    const { message, visible, show } = useMascot();
    // helper per mostrar missatges des de consola / altres scripts
    window.triggerMascot = show;
    return React.createElement(MascotOverlay, { message, visible });
  }

  ReactDOM.render(
    React.createElement(MascotRoot),
    document.getElementById('mascot-root')
  );
})();
