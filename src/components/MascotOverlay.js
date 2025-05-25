/* eslint-env browser */
const { useEffect, useRef } = React;

export function MascotOverlay({ message, visible, hide, mute }) {
  const bubbleRef = useRef(null);
  const lottieRef = useRef(null);       // on muntarem l’animació
  const animRef   = useRef(null);       // instància de lottie

  /* muntatge Lottie només la 1a vegada */
  useEffect(() => {
    if (animRef.current) return;        // ja està
    animRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'src/assets/mascot.json',   // <-- la ruta del teu JSON
    });
  }, []);

  /* fade-in / fade-out + pausa / play de l’animació */
  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    bubble.style.opacity   = visible ? '1' : '0';
    bubble.style.transform = visible ? 'translateY(0)' : 'translateY(-10px)';

    if (animRef.current) {
      visible ? animRef.current.play() : animRef.current.pause();
    }
  }, [visible, message]);

  return React.createElement(
    'div',
    { id: 'mascot-wrapper' },
    /* contenidor Lottie */
    React.createElement('div', { id: 'mascot-lottie', ref: lottieRef, onClick: hide }),
    /* Bombolla */
    React.createElement(
      'div',
      { id: 'mascot-bubble', ref: bubbleRef },
      React.createElement('span', null, message),
      React.createElement(
        'button',
        { id: 'mascot-close', onClick: mute },
        '×',
      ),
    ),
  );
}

window.MascotOverlay = MascotOverlay;
