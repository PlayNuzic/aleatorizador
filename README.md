## Configuració per a Codex

Abans de fer servir Codex per generar codi o fer `git push`, cal executar:

```bash
./setup.sh
```

## Mascot Overlay

A new React-based mascot provides tips on key actions. The overlay can be muted and remembers the preference via `localStorage`.

### Usage
- Load the page and the mascot greets the user.
- Call `triggerMascot('mensaje')` from anywhere to display a custom message.
- Click the close button on the bubble to mute it permanently.

Run `npm test` to execute Jest tests (may fail offline).
