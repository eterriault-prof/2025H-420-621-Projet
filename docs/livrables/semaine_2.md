# Semaine 2 : Intégration de python-chess et gestion des mouvements

## **La libraire `python-chess`**
`python-chess` est une bibliothèque Python puissante et facile à utiliser pour manipuler des jeux d'échecs. Elle permet de gérer les règles du jeu, de valider les mouvements, de détecter les situations comme l'échec et mat ou le pat, et bien plus encore. Elle fournit également des outils pour représenter l'état du plateau avec des notations standard comme FEN (Forsyth-Edwards Notation). 

Cette bibliothèque facilitera l'implémentation de la logique de jeu dans votre projet. Encore une fois, il n'est pas obligatoire de l'utiliser dans ce projet - si vous préférez utiliser une autre librairie, ou implémenter vous-mêmes la logique de jeu, libre à vous!

## **Fichiers à mettre à jour**
- Mettez à jour le fichier `requirements.txt` pour inclure la bibliothèque `python-chess` en rajoutant la ligne suivante:

```
python-chess
```

- Assurez-vous d'installer la bibliothèque (après avoir activé votre environnement virtuel - voir instructions dans le fichier README.md) avec la commande: 
```
pip install -r requirements.txt
```

## **Étape 1 : Introduire python-chess sans rien briser :)**
Pour utiliser `python-chess` :
1. **Importer la bibliothèque** :
   - Ajoutez `import chess` dans le fichier `game.py` (ou dans tout autre fichier où vous souhaitez utiliser l'engin d'échecs).

2. **Remplacer votre classe `Board`** :
   - Supprimez votre classe `Board` et remplacez-la par `chess.Board` fourni par `python-chess`.
   - Mettez à jour votre classe `Game` pour initialiser un plateau avec `chess.Board` :
     ```python
     self.board = chess.Board()
     ```
    - Vous n'aurez également pas besoin des fichiers `piece.py` et `rules.py` en utilisant `python-chess`.

3. **Adapter vos fonctions existantes** :
   - Mettez à jour toutes vos fonctions pour obtenir le même résultat qu'avant, mais cette fois-ci en utilisant `python-chess` au lieu de votre classe `Board`.

**Conseil** : Consultez les fonctions disponibles dans la documentation officielle :  
[Documentation python-chess](https://python-chess.readthedocs.io/en/latest/engine.html)

### **Modélisation du plateau de jeu**
- **Backend** :
  - Au lieu de représenter la position des pièces avec des caractères dans un tableau 8x8, utilisez la notation FEN (Forsyth-Edwards Notation) fournie par `python-chess`.
  - La méthode `board.fen()` permet d'obtenir l'état du plateau dans cette notation.  
    [En savoir plus sur la notation FEN](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)

- **Frontend** :
  - Convertissez la notation FEN en un tableau 8x8 pour l'affichage dans le frontend.

---

## **Étape 2 : Gestion des clics pour déplacer les pièces**
1. **Sélection et déplacement** :
   - Implémentez un gestionnaire d'événements pour capturer deux clics :
     - **Premier clic** : Sélectionner une pièce.
     - **Deuxième clic** : Sélectionner la case de destination.

2. **Affichage dans la console** :
   - Lors du premier clic, affichez dans la console la pièce sélectionnée.
   - Lors du deuxième clic, affichez la case de destination.

**Note** : À cette étape, aucun changement visuel des pièces n'est requis.

---

## **Étape 3 : Communication via WebSockets**
### **Objectif : Gérer les mouvements des pièces entre le frontend et le backend.**

### **Étapes principales :**
1. **Frontend** :
   - Capturez les deux clics (sélection et destination) et émettez un message WebSocket avec les informations sur le déplacement.

2. **Backend** :
   - Recevez le message WebSocket contenant les informations de déplacement.
   - Validez le mouvement à l'aide de la méthode `make_move` (ou similaire) de la classe `Game`.
   - Émettez une réponse WebSocket en fonction du résultat :
     - **Mouvement valide** : Émettez un événement `board_update` avec la nouvelle FEN.
     - **Mouvement invalide** : Émettez un événement `illegal_move` avec un message d'erreur.

3. **Frontend** :
   - **Si le mouvement est valide** : Mettez à jour le plateau avec la nouvelle position des pièces.
   - **Si le mouvement est invalide** : Affichez un message d'erreur à l'utilisateur.

**Conseil** : Stockez la logique de validation dans votre classe `Game` pour éviter de surcharger le fichier `websockets.py`. Ce fichier doit uniquement recevoir et envoyer des messages, et déléguer la logique aux bonnes composantes.

---

## **Étape 4 : Gestion de la fin de la partie**
1. **Vérifiez si la partie est terminée** :
   - Implémentez une méthode dans la classe `Game` pour vérifier si la partie est terminée (échec et mat, pat, etc.).
   - Utilisez la méthode `board.is_game_over()` de `python-chess`.

2. **Affichez la raison de la fin de la partie** :
   - Si la partie est terminée, émettez un événement WebSocket `game_over` avec la raison (par exemple, "Échec et mat").

3. **Frontend** :
   - Ajoutez un listener pour l'événement `game_over` et affichez un message à l'utilisateur.

---

## **Étape 5 : Tests**
À ce stade, vous devriez être capable de jouer une partie complète (avec les deux joueurs connectés sur le même client). Assurez-vous que le fonctionnement de base d'une partie d'échec est en place.


## **Ressources utiles**
- [Documentation python-chess](https://python-chess.readthedocs.io/en/latest/)
- [Notation Forsyth-Edwards (FEN)](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)
