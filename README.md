# 420-621-Projet

## Description
Un jeu d'échecs multi-joueurs qui peut être joué à deux ou seul contre une IA. Le jeu utilise Python, Pygame pour l'interface graphique, Flask pour le serveur web, et WebSockets pour la communication en temps réel.

## Technologies utilisées
- Python
- Pygame
- Flask
- WebSockets

## Instructions

1. Activer l'environnement virtuel (optionnel mais recommandé)
```bash
cd app/backend  # Aller dans le dossier backend
python -m venv venv       # Créer un environnement virtuel
source venv/bin/activate  # Activer sur macOS/Linux
venv\Scripts\activate     # Activer sur Windows
```

2. Installez les dépendances :
   ```bash
   pip install -r requirements.txt
   ```
3. Lancez le serveur Flask :
   ```bash
   cd backend
   python -m server.app
   ```
3. Ouvrez le jeu dans votre navigateur à l'adresse `http://<adresse_du_serveur>:5000`.

## Fonctionnalités prévues
- Jeu local à deux joueurs.
- Jeu contre une IA.
- Jeu en ligne via WebSockets.
