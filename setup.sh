REPO_HTTPS="https://${GITHUB_TOKEN}@github.com/PlayNuzic/aleatorizador.git"

# canvia (o crea) l’URL, no l’afegeix si ja hi és
git remote set-url origin "$REPO_HTTPS"

git checkout main
echo "✅ Entorn preparat"#!/usr/bin/env bash
set -eux

# — 1) Config bàsica de git
git config --global user.name  "PlayNuzic-Codex"
git config --global user.email "codex@playnuzic.local"

REPO_HTTPS="https://${GITHUB_TOKEN}@github.com/PlayNuzic/aleatorizador.git"

# canvia (o crea) l’URL, no l’afegeix si ja hi és
git remote set-url origin "$REPO_HTTPS"

git checkout main
echo "✅ Entorn preparat"
