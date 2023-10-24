# miniPortefolioReact

Le projet **miniPortefolioReact** est une application React qui me permet d'afficher mon profil GitHub et de lister mes projets. J'utilise l'API GitHub pour récupérer les données nécessaires.

## Le projet :

1. **App.js** :
   - C'est le composant principal de l'application.
   - J'utilise le `BrowserRouter` pour gérer le routage.
   - Je définis trois routes principales :
     - `/` pour afficher le profil.
     - `/projects` pour lister tous les projets.
     - `/projects/:name` pour afficher les détails d'un projet spécifique.
   - Le composant `Header` est affiché sur toutes les pages.

2. **Projects.js** :
   - Ce composant est destiné à afficher la liste des projets GitHub de l'utilisateur.
        - useState
            - `loading` : Un état pour suivre si les données sont en cours de chargement.
            - `Projects` : Un état pour stocker la liste des projets récupérés.

        - useEffect
            - Une fonction asynchrone est définie à l'intérieur pour récupérer la liste des projets via l'API GitHub. L'URL de l'API est construite en utilisant le `userName` (passé en tant que prop).
            - Si les données sont récupérées avec succès, l'état `Projects` est mis à jour avec la liste des projets et `loading` est défini sur `false`.

        - Rendu
            - Si les données sont en cours de chargement (`loading` est `true`), un message "Loading..." est affiché.
            - Sinon, la liste des projets est affichée à l'aide du composant `List`.
            - Chaque projet est représenté par son nom et un lien vers sa page GitHub. Le lien est généré à l'aide du composant `RouterLink`.

3. **ProjectDetails.js** :
   - Ce composant affiche les détails d'un projet spécifique.
   - J'utilise l'API GitHub pour récupérer les détails du projet en fonction du `userName` et du `name` du projet.
   - Les détails du projet sont stockés dans l'état `project`.

## Personnalisation pour un autre utilisateur :

Pour permettre à quiconque de cloner le projet et de le personnaliser avec son propre nom d'utilisateur GitHub, voici les étapes à suivre :

1. **Clonage du dépôt** :
   ```bash
   git clone https://github.com/GuiFraV/miniPortefolioReact.git
   cd miniPortefolioReact
   ```
2. **Installation des dépendances** :
   ```bash
    npm install
   ```
3. **Modification de l'username** :

Dans le fichier src/App.js, recherchez les instances où l'username est utilisé.
Remplacez cet username par le nom d'utilisateur GitHub souhaité.
Par exemple, pour l'username johnDoe :
   ```bash
    <Route 
        path='/'
        element={<Profile userName="johnDoe" />}
    />
    <Route 
        path='/projects'
        element={<Projects userName="johnDoe" />}
    />
    <Route 
        path='/projects/:name'
        element={<ProjectDetails userName="johnDoe" />}
    />
   ```
4. **Lancement de l'application** :
   ```bash
    npm start
   ```
***Note : L'API GitHub a des limites de taux pour les requêtes non authentifiées.***

