# Configuration Git et GitHub pour le projet

## **1. Création d'un fork du dépôt GitHub**
1. Connectez-vous à votre compte GitHub.
2. Rendez-vous sur le dépôt suivant : [2025H-420-621-Projet](https://github.com/eterriault-prof/2025H-420-621-Projet).
3. Cliquez sur le bouton **Fork** en haut à droite de la page.
4. Sélectionnez votre compte GitHub comme destination pour le fork.
5. Une fois le fork créé, vous serez redirigé vers votre propre copie du dépôt (par exemple, `https://github.com/<votre-utilisateur>/2025H-420-621-Projet`).

---

## **2. Clonage du dépôt forké**
1. Ouvrez un terminal ou PowerShell et naviguez dans le dossier où vous souhaitez cloner le projet :
   ```bash
   cd CHEMIN/ACCES/AU/DOSSIER
   ```
2. Clonez votre fork du dépôt :
   ```bash
   git clone git@github.com:<votre-utilisateur>/2025H-420-621-Projet.git
   ```
3. Accédez au dossier cloné :
   ```bash
   cd 2025H-420-621-Projet
   ```

---

## **3. Configuration des clés SSH**
### **Vérifier ou générer une clé SSH**
1. Vérifiez si vous avez déjà une clé SSH :
   ```bash
   ls ~/.ssh/id_rsa.pub  # Linux/Mac
   dir %USERPROFILE%\.ssh\id_rsa.pub  # Windows
   ```
   Si une clé existe, passez à l'étape suivante. Sinon, générez-en une nouvelle :
   ```bash
   ssh-keygen -t rsa -b 4096 -C "votre-email@example.com"
   ```
   Appuyez sur **Entrée** pour accepter l'emplacement par défaut, puis définissez un mot de passe (optionnel).

2. Ajoutez la clé SSH à l'agent SSH :
   ```bash
   eval $(ssh-agent -s)  # Linux/Mac
   ssh-add ~/.ssh/id_rsa
   ```
   Sur Windows (PowerShell) :
   ```bash
   ssh-add %USERPROFILE%\.ssh\id_rsa
   ```

### **Ajouter la clé SSH à GitHub**
1. Copiez la clé SSH dans le presse-papier :
   ```bash
   cat ~/.ssh/id_rsa.pub  # Linux/Mac
   type %USERPROFILE%\.ssh\id_rsa.pub  # Windows
   ```
2. Connectez-vous à GitHub, allez dans **Settings > SSH and GPG keys**, puis cliquez sur **New SSH key**.
3. Collez la clé dans le champ **Key** et donnez-lui un titre (par exemple, "Clé SSH pour projet 420-621").
4. Cliquez sur **Add SSH key**.

---

## **4. Synchronisation avec le dépôt original**
1. Ajoutez le dépôt original comme dépôt distant `upstream` :
   ```bash
   git remote add upstream git@github.com:eterriault-prof/2025H-420-621-Projet.git
   ```
2. Vérifiez les dépôts distants configurés :
   ```bash
   git remote -v
   ```
   Vous devriez voir deux entrées : `origin` (votre fork) et `upstream` (le dépôt original).

3. Synchronisez votre fork avec le dépôt original pour récupérer les mises à jour :
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

---

## **5. Faire un commit et un push**
1. Ajoutez tous les fichiers au suivi Git :
   ```bash
   git add .
   ```
2. Créez un commit avec un message descriptif :
   ```bash
   git commit -m "Vos modifications"
   ```
3. Poussez les modifications vers votre fork :
   ```bash
   git push origin main
   ```

---

## **6. Vérification**
1. Rendez-vous sur votre fork GitHub pour vérifier que les fichiers ont bien été poussés.
2. Si vous travaillez en équipe, partagez le lien de votre fork avec vos coéquipiers et assurez-vous qu'ils ont accès.

---

## **7. Commandes utiles**
- **Vérifier l'état du dépôt** :
  ```bash
  git status
  ```
- **Voir l'historique des commits** :
  ```bash
  git log
  ```
- **Mettre à jour le dépôt local avec les modifications distantes** :
  ```bash
  git pull origin main
  ```
- **Synchroniser avec le dépôt original** :
  ```bash
  git fetch upstream
  git merge upstream/main
  ```
- **Pousser de nouvelles modifications** :
  ```bash
  git push
  ```

---