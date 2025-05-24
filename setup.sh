#!/usr/bin/env bash
set -eux

# 1) Config bàsica de git
git config --global user.name  "PlayNuzic-Codex"
git config --global user.email "codex@playnuzic.local"

# 2) Construeix l’URL HTTPS amb PAT a partir del remote existent
REMOTE=$(git config --get remote.origin.url)          
REMOTE_HTTPS=${REMOTE/git@github.com:/https://${GITHUB_TOKEN}@github.com/}

# 3) Actualitza (o crea) origin
git remote set-url origin "$REMOTE_HTTPS"

git checkout main || true
echo "✅ Entorn preparat"
