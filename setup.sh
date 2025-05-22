#!/usr/bin/env bash
set -eux  # exit on first error

### 0) Variables
REPO_SSH="git@github.com:PlayNuzic/aleatorizador.git"
BRANCH="main"

### 1) Installa git + ssh-client si cal (Codex container sol ja tenir-lo)
if ! command -v git >/dev/null 2>&1; then
  apt-get update && apt-get install -y git openssh-client
fi

### 2) Configura identitat Git (evitem ‘who you are’)
git config --global user.name  "PlayNuzic-Codex"
git config --global user.email "codex@playnuzic.local"

### 3) Configura SSH sobre port 443 (ja tens la clau al secret $SSH_KEY)

# ─── VALIDEM QUE SSH_KEY EXISTEIX ────────────────────────────────────────
if [ -z "${SSH_KEY-}" ]; then
  echo "ERROR: la variable d'entorn SSH_KEY no està definida." >&2
  echo "Exporta-la manualment o afegeix-la com a secret de Codespaces." >&2
  exit 1
fi
# ─────────────────────────────────────────────────────────────────────────

mkdir -p ~/.ssh
echo "$SSH_KEY" > ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
cat > ~/.ssh/config <<'EOF'
Host github.com
  HostName ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_ed25519
  StrictHostKeyChecking no
EOF
ssh-add ~/.ssh/id_ed25519 2>/dev/null || true

### 4) Clona el repo si no existeix
if [ ! -d ".git" ]; then
  git clone "$REPO_SSH" .
fi

### 5) Situa’t a la branca correcta i porta l’últim
git fetch --all
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

echo ">> Repo $(pwd) preparat sobre branca $BRANCH"
