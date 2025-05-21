#!/usr/bin/env bash
set -eux

# ── 0) OPCIONAL: Proxy corporatiu (deixa-ho comentat si no cal)
# export http_proxy="http://PROXY_HOST:PROXY_PORT"
# export https_proxy="$http_proxy"
# git config --global http.proxy  "$http_proxy"
# git config --global https.proxy "$https_proxy"

# ── 1) Instal·la git i ssh-client si cal
if ! command -v git >/dev/null 2>&1; then
  apt-get update
  apt-get install -y git openssh-client netcat
fi

# ── 2) Si no és un repo git, clona’l
if [ ! -d ".git" ]; then
  git clone git@github.com:PlayNuzic/encapsulated.git .
fi

# ── 3) Configurem l’agent SSH i la clau
eval "$(ssh-agent -s)"

# Tria automàticament ED25519 o RSA
if [ -n "${SSH_KEY-}" ]; then
  :
elif [ -f "${HOME}/.ssh/id_ed25519" ]; then
  export SSH_KEY="$(cat "${HOME}/.ssh/id_ed25519")"
elif [ -f "${HOME}/.ssh/id_rsa" ]; then
  export SSH_KEY="$(cat "${HOME}/.ssh/id_rsa")"
else
  echo "ERROR: no s'ha trobat cap clau SSH a ~/.ssh" >&2
  exit 1
fi

mkdir -p ~/.ssh
echo "$SSH_KEY" > ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
ssh-add ~/.ssh/id_ed25519

# ── 4) Afegim GitHub a known_hosts
ssh-keyscan github.com >> ~/.ssh/known_hosts

# ── 5) Configurem remote origin si no existeix
if ! git remote | grep -q origin; then
  git remote add origin git@github.com:PlayNuzic/encapsulated.git
fi

# ── 6) Baixa totes les branques i canvia a aleatorizador
git fetch --all
git checkout aleatorizador

# Intenta rebase; si falla, fa un merge automàtic
git pull --rebase origin aleatorizador || git pull origin aleatorizador

echo "=== Entorn configurat. Ja pots fer git push origin aleatorizador ==="
