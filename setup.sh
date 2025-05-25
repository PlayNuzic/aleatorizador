#!/usr/bin/env bash
set -euxo pipefail

# 0. Instal·lació d’eines de base (molt lleugera)
apt-get update -qq
apt-get install -yqq git curl jq make bash-completion

# 1. Config Git amb nom+mail genèrics
git config --global user.name  "PlayNuzic-Codex"
git config --global user.email "codex@playnuzic.local"

# 2. Deixa ‘origin’ apuntant a HTTPS amb PAT
REMOTE_URL="$(git config --get remote.origin.url || true)"
if [[ -z "$REMOTE_URL" ]]; then
  REPO_PATH=$(basename "$(pwd)")
  REMOTE_URL="https://${GITHUB_TOKEN}@github.com/PlayNuzic/${REPO_PATH}.git"
  git remote add origin "$REMOTE_URL"
else
  # substitueix token vell (si n’hi havia) pel nou
  REMOTE_URL="${REMOTE_URL/https:\/\/ghp_[A-Za-z0-9]*/https://${GITHUB_TOKEN}}"
  git remote set-url origin "$REMOTE_URL"
fi

# 3. Habilita yarn/pnpm sense baixar-los
corepack enable


# 4. Instal·la les dependències de Node (inclòs Jest) abans que es talli la xarxa
npm install --ignore-scripts --no-audit --progress=false

echo "✅ Entorn preparat. Pots fer git add / commit / push (HTTPS amb PAT)."
