#!/usr/bin/env bash
set -eux

# 1) Instal·lem git i ssh-client si no existeixen
if ! command -v git >/dev/null 2>&1; then
  apt-get update
  apt-get install -y git openssh-client
fi

# 2) Configurem l’agent SSH
eval "$(ssh-agent -s)"

# 3) La clau privada ha d’estar disponible en una variable d’entorn
#    Ex: export SSH_KEY="$(cat ~/.ssh/id_ed25519)"
if [ -n "${SSH_KEY-}" ]; then
  mkdir -p ~/.ssh
  echo "$SSH_KEY" > ~/.ssh/id_ed25519
  chmod 600 ~/.ssh/id_ed25519
  ssh-add ~/.ssh/id_ed25519
else
  echo "ERROR: la variable SSH_KEY no està definida" >&2
  exit 1
fi

# 4) Afegim GitHub a known_hosts per evitar prompts
ssh-keyscan github.com >> ~/.ssh/known_hosts

# 5) Configurem el remote origin si cal
cd "$(git rev-parse --show-toplevel)"
if ! git remote | grep -q origin; then
  git remote add origin git@github.com:PlayNuzic/encapsulated.git
fi

# 6) Assegura’t d’estar a la branca correcta
git fetch origin
git checkout aleatorizador

echo "=== Entorn configurat. Ara es pot fer git push origin aleatorizador ==="
