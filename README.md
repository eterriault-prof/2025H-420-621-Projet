# 420-621-Projet

## Description
Un jeu d'échecs multi-joueurs qui peut être joué à deux ou seul contre une IA. Le jeu utilise Python, Pygame pour l'interface graphique, Flask pour le serveur web, et WebSockets pour la communication en temps réel.

## Technologies utilisées
- Python
- Pygame
- Flask
- WebSockets

## Structure suggérée du projet
```
420-621-Projet/
├── app/                # Contient le code Flask et WebSocket
│   ├── __init__.py     # Initialisation de l'application Flask
│   ├── routes.py       # Routes Flask
│   ├── websocket.py    # Gestion des WebSockets
│   └── static/         # Fichiers statiques (CSS, JS)
├── chess/              # Contient la logique du jeu d'échecs
│   ├── __init__.py     # Initialisation du module
│   ├── board.py        # Gestion de l'échiquier
│   ├── pieces.py       # Gestion des pièces
│   └── ai.py           # Intelligence artificielle
├── main.py             # Point d'entrée principal
├── requirements.txt    # Dépendances Python
└── README.md           # Documentation du projet
```

## Instructions
1. Installez les dépendances :
   ```bash
   pip install -r requirements.txt
   ```
2. Lancez le serveur Flask :
   ```bash
   python main.py
   ```
3. Ouvrez le jeu dans votre navigateur à l'adresse `http://<adresse_du_raspberry>:5000`.

## Fonctionnalités prévues
- Jeu local à deux joueurs.
- Jeu contre une IA.
- Jeu en ligne via WebSockets.
