// src/components/MascotOverlay.js
const { useEffect } = React;

/**
 * Component presentacional (Lottie + bombolla)
 * props: { message, visible, hide }
 */
function MascotOverlay({ message, visible, hide }) {
  // carrega animació Lottie un cop
  useEffect(() => {
    if (!window.lottie) return;
    window.lottie.loadAnimation({
      container: document.getElementById('mascot-lottie'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'src/assets/mascot.json'
    });
  }, []);

  if (!visible) return null;

  return (
    <div id="mascot" style={{ position: 'fixed', top: 15, left: 15 }}>
      <div id="mascot-lottie" style={{ width: 120, height: 120 }}></div>
      <div className="bubble">
        {message}
        <button onClick={() => { hide(); localStorage.setItem('mascotMuted','true'); }}>×</button>
      </div>
    </div>
  );
}

window.MascotOverlay = MascotOverlay;
