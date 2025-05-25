/* eslint-env browser */
const { MascotOverlay, useMascot } = window;

function MascotRoot() {
  /* hook global */
  const state = useMascot();      // { message, visible, show, hide, mute }
  /* exposem perquè puguis cridar-ho a la consola */
  window.triggerMascot = state.show;
  return React.createElement(MascotOverlay, state);
}

ReactDOM.render(
  React.createElement(MascotRoot),
  document.getElementById('mascot-root'),
);
