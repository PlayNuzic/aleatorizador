## Configuració per a Codex

Abans de fer servir Codex per generar codi o fer `git push`, cal executar:

```bash
./setup.sh

## Mascot Overlay

A small React component provides tips on key actions. Scripts under `src/components` and `src/hooks` load after React in `index.html`. The overlay can be muted and remembers the preference via `localStorage`.

### Usage
- Load the page and the mascot greets the user.
- Call `triggerMascot('mensaje')` from anywhere to display a custom message.
- Click the close button on the bubble to mute it permanently.

Unit tests are placeholders because the environment lacks `jest`.
