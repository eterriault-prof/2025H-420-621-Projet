https://flask.palletsprojects.com/en/stable/tutorial/factory/

---

# Énoncé de travail - Semaine 1 : Début du développement du jeu d'échecs en ligne

## Objectif de la semaine
Cette semaine, vous commencerez à implémenter les premières fonctionnalités de votre jeu d’échecs. Vous allez :
- Créer un **plateau interactif** avec **Pygame** pour afficher les pièces d’échecs.
- Permettre aux joueurs de **cliquer sur une case** pour y placer une pièce.
- **Valider les mouvements** en empêchant de jouer sur une case déjà occupée.
- Implémenter les bases de la communication en temps réel entre les joueurs en utilisant **WebSockets**.

## Structure du projet et démarrage de l'application

Voir la structure du projet dans le fichier **README.md**. Cette structure contient déjà les fichiers nécessaires et les répertoires pour les templates, les fichiers statiques et les scripts Python.

Le **README.md** contiendra également les instructions pour démarrer l'application.

## 1. Le Plateau Interactif avec Pygame

### Objectif :
Créer un **plateau de jeu interactif** où chaque case peut être cliquée pour déplacer une pièce d'échecs.

### Détails :
- Utilisez **Pygame** pour afficher le plateau de jeu.
- Le plateau doit être composé de **64 cases** (8x8) avec des couleurs alternées (noir et blanc).
- Chaque case doit avoir une taille de **60x60 pixels**.
- Implémentez l'affichage des **pièces d’échecs** sur le plateau. Les pièces doivent être représentées par des images, que vous pouvez télécharger ou dessiner.

#### Pièces à implémenter :
- **Pion (Pawn)** : Noir et Blanc
- **Tour (Rook)** : Noir et Blanc
- **Cavalier (Knight)** : Noir et Blanc
- **Fou (Bishop)** : Noir et Blanc
- **Reine (Queen)** : Noir et Blanc
- **Roi (King)** : Noir et Blanc

Vous pouvez placer les images des pièces dans le dossier `frontend/assets/` (par exemple : `black_pawn.png`, `white_pawn.png`, etc.).

### Aide :
Pour afficher et interagir avec les images, vous pouvez utiliser la fonction `blit()` de **Pygame** pour dessiner les pièces sur le plateau.

---

## 2. Interaction de Base : Placer une Pièce

### Objectif :
Permettre aux joueurs de **cliquer sur une case** du plateau et y placer une pièce.

### Détails :
- Lorsque le joueur clique sur une case vide, une pièce du joueur (noir ou blanc) doit apparaître sur cette case.
- Vous devez **vérifier si la case est déjà occupée** avant de déplacer une pièce dessus. Si la case est déjà occupée, le mouvement doit être bloqué.
  
### Aide :
Lorsque l'utilisateur clique sur une case (par exemple avec la fonction `pygame.mouse.get_pos()`), vous pouvez obtenir la case sélectionnée et vérifier si elle est vide ou occupée avant de permettre le mouvement de la pièce.

---

## 3. Validation des Mouvements

### Objectif :
Valider les mouvements en **empêchant de jouer sur une case déjà occupée**.

### Détails :
- Implémentez une **vérification** qui empêche un joueur de déplacer une pièce sur une case déjà occupée par une autre pièce.
- Les joueurs ne doivent pouvoir jouer que sur les cases **vides** (ou valides selon les règles des échecs).
  
### Aide :
Dans le fichier `game.py`, vous pouvez implémenter la **logique de validation** qui vérifie si la case ciblée par le joueur est vide ou non.

---

## 4. Intégration de WebSockets pour la Communication en Temps Réel

### Objectif :
Permettre aux deux joueurs d’interagir **en temps réel** pendant la partie.

### Détails :
- Utilisez **WebSockets** pour permettre la communication entre les deux joueurs.
- Lorsqu’un joueur déplace une pièce, ce mouvement doit être **envoyé à l’autre joueur** en temps réel via WebSockets. L'autre joueur doit voir le changement immédiatement.
  
### Aide :
- Créez un fichier `websockets.py` dans lequel vous gérerez la logique de connexion et d'envoi/recevoir de messages via WebSockets.
- Dans `app.py`, vous pouvez initialiser le serveur Flask et ajouter le serveur WebSocket pour gérer les connexions.

```python
# Exemple d'initialisation d'un serveur WebSocket avec Flask
from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@socketio.on('move_piece')
def handle_move(data):
    # Gérer le mouvement de la pièce ici
    pass

if __name__ == '__main__':
    socketio.run(app)

Livrables de la Semaine 1
Fichiers à soumettre :
game.py : Logique du jeu (validation des mouvements, gestion du plateau, etc.).

websockets.py : Gérer les connexions WebSocket et les échanges de messages entre les joueurs.

script.js : Code JavaScript pour gérer les interactions avec le front-end (cliquer sur une case, déplacer une pièce).

Plateau interactif Pygame : Utilisation de Pygame pour afficher le plateau et les pièces, et permettre l’interaction de base.

Instructions pour lancer l'application :
Installez les dépendances nécessaires via pip install -r requirements.txt.

Exécutez le serveur Flask via python backend/server/app.py.

Lancez le front-end avec python frontend/app.py ou en ouvrant frontend/templates/index.html dans votre navigateur.

Accédez au jeu en ouvrant votre navigateur à l'adresse http://localhost:5000.

Critères d'évaluation :
Interactivité du plateau : Le plateau s'affiche correctement et permet de déplacer les pièces via des clics.

Validation des mouvements : Les joueurs ne peuvent pas déplacer une pièce sur une case déjà occupée.

Communication en temps réel avec WebSockets : Les mouvements des pièces sont visibles en temps réel par l'autre joueur.

🎯 Conseils :
Prenez votre temps pour bien comprendre la logique de placement des pièces et la communication WebSocket.

N'oubliez pas de tester chaque fonctionnalité au fur et à mesure pour éviter les bugs.