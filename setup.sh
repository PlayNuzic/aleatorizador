#!/usr/bin/env bash
set -euo pipefail                # atura’t si hi ha cap error

# ── VARIABLES ────────────────────────────────────────────────────────────────
REPO_SSH="git@github.com:${GITHUB_REPOSITORY}.git"             # el clòna Codespaces
REPO_HTTPS="https://${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

# ── PAS 0: instal·la git si cal (entorns universals ja el porten) ────────────
command -v git >/dev/null 2>&1 || (apt-get update -y && apt-get install -y git)

# ── PAS 1: configura nom i correu per als commits automàtics ────────────────
git config --global user.name  "PlayNuzic-Codex"
git config --global user.email "codex@playnuzic.local"

# ── PAS 2: assegura’t que hi ha remote ·origin· i que apunta a HTTPS PAT ────
if git ls-remote --get-url origin &>/dev/null; then
  git remote set-url origin "${REPO_HTTPS}"
else
  git remote add origin "${REPO_HTTPS}"
fi

# ── PAS 3: treu possibles proxies corporatius (per si n’hi hagués) ──────────
git config --global --unset http.proxy  || true
git config --global --unset https.proxy || true
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY

# ── PAS 4: sincronia i començament de feina ─────────────────────────────────
git fetch --all
git checkout "${GITHUB_REF_NAME:-main}"   # main o la branca on s’executi
echo "✅ Entorn preparat. Pots fer git add / commit; el push es farà via HTTPS."
