https://flask.palletsprojects.com/en/stable/tutorial/factory/


---

## Semaine 1 - Objectifs

- **Implémenter le moteur du jeu** (classes `Game`, `Piece`, `Board`).  
- **Mettre en place un serveur Flask** minimal qui affiche une page avec le plateau.  
- **Créer une interface basique** (HTML/CSS) avec un plateau statique.  
- **Ajouter les WebSockets** pour la connexion joueur-serveur.  

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
│ ├── frontend_app.py → (Optionnel) Un serveur local pour tester le frontend séparément
│
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
