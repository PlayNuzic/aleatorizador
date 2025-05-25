const { createElement } = React;
const { render } = ReactDOM;
const { MascotOverlay, useMascot } = window;

function MascotRoot() {
  const { message, visible, show } = useMascot();

  // expose show function globally for demo
  window.triggerMascot = show;

  return createElement(MascotOverlay, { message, visible });
}
render(
  createElement(MascotRoot),
  document.getElementById('mascot-root')
);

