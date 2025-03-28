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

## Structure des fichiers

Pour la première semaine, nous mettrons en place la structure de notre application. Voici une sugesstion d'architecture (votre implémentation pourra différer si vous le souhaitez):

-  chess_project/ (Racine du projet)
│
├── - backend/ (Serveur Flask et logique du jeu)
│ ├── 📂 game/ (Moteur du jeu)
│ │ ├── __init__.py → Initialise le module
│ │ ├── game.py → Contient la classe Game, qui gère l'état du jeu
│ │ ├── piece.py → Définit la classe Piece et ses sous-classes (Pawn, Rook, etc.)
│ │ ├── rules.py → Implémente la validation des mouvements
│ │ ├── board.py → Initialise et met à jour le plateau
│ │
│ ├── 📂 server/ (Serveur Flask)
│ │ ├── __init__.py → Initialise le serveur
│ │ ├── app.py → Gère l’application Flask et les routes
│ │ ├── websockets.py → Gère la communication WebSockets avec les clients
│ │
│ ├── 📂 tests/ (Tests unitaires)
│ │ ├── test_game.py → Vérifie la logique du jeu
│ │ ├── test_api.py → Vérifie les routes Flask
│ │
│ ├── requirements.txt → Dépendances du projet (Flask, Flask-SocketIO, python-chess, etc.)
│ ├── config.py → Configuration du projet (paramètres Flask, WebSockets, MQTT)
│
├── 📂 frontend/ (Interface utilisateur)
│ ├── 📂 static/ (Fichiers statiques : CSS, JS, images)
│ │ ├── style.css → Styles du plateau
│ │ ├── script.js → Gestion des interactions (mise à jour du plateau, WebSockets)
│ │
│ ├── 📂 templates/ (Templates HTML pour Flask)
│ │ ├── index.html → Interface principale du jeu
│ │
│ ├── 📂 assets/
│   ├── black_pawn.png
│   ├── white_pawn.png
│   └── ...
│ ├── frontend_app.py → (Optionnel) Un serveur local pour tester le frontend séparément
├── README.md → Explication du projet et des étapes
---

## Rôles des fichiers

### **Backend**
- `game.py` : Gère la logique du jeu.
- `rules.py` : Vérifie les règles des déplacements.
- `server/app.py` : Gère l’API Flask et sert le frontend.
- `websockets.py` : Envoie et reçoit les mises à jour des coups en temps réel.
- `mqtt_client.py` : (Si utilisé) Publie et souscrit aux messages MQTT.

### **Frontend**
- `index.html` : Affiche le plateau et gère l'affichage des pièces.
- `script.js` : Écoute les WebSockets et met à jour l'interface.
- `style.css` : Améliore le rendu visuel du jeu.

### **Tests**
- Vérification des règles et des API avec `test_game.py` et `test_api.py`.
