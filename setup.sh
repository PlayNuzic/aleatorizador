#!/usr/bin/env bash
set -eux

# — 1) Config bàsica de git
git config --global user.name  "PlayNuzic-Codex"
git config --global user.email "codex@playnuzic.local"

# — 2) Remote origin (HTTPS + PAT)
REPO_HTTPS="https://$GITHUB_TOKEN@github.com/PlayNuzic/aleatorizador.git"
if ! git remote | grep -qx origin; then
  git remote add origin "$REPO_HTTPS"
else
  git remote set-url origin "$REPO_HTTPS"
fi

# — 3) Garanteix que som a main
git checkout main

echo "✅ Entorn preparat. Pots fer git add / commit. \
El push es farà via HTTPS amb el token."
