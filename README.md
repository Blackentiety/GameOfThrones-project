# Game of Thrones - Projet React

Un projet React permettant d'explorer l'univers de Game of Thrones en affichant les maisons et leurs membres grâce à l'API A Song of Ice and Fire.

## Objectif du projet

Créer une application web avec 3 étapes et des bonus :

### Étape 1 : Afficher les maisons
- Récupérer les maisons depuis l'API : https://www.anapioficeandfire.com/api/houses
- Afficher la liste dans la sidebar noire (gauche)
- BONUS : Utiliser un composant House réutilisable

### Étape 2 : Afficher les membres
- Cliquer sur une maison pour voir ses membres
- Les membres s'affichent dans la zone de contenu (droite)
- Chaque membre affiche : nom + bouton "Détails"
- BONUS : Utiliser un composant Personnage réutilisable

### Étape 3 : Afficher les détails
- Cliquer sur "Détails" pour ouvrir une popup
- Afficher les infos complètes du personnage (nom, genre, culture, titres, etc.)
- BONUS : Utiliser un composant Popup réutilisable

## Architecture du projet

```
src/
├── components/
│   ├── gameOfThrones.jsx       (composant principal)
│   ├── House.jsx               (composant pour chaque maison)
│   ├── Personnage.jsx          (composant pour chaque personnage)
│   ├── Popup.jsx               (composant pour les détails)
│   └── GameOfThrones.module.css (styles)
├── App.jsx
├── main.jsx
└── index.css
```

## Composants créés

1. House.jsx - Affiche une maison cliquable dans la sidebar
2. Personnage.jsx - Affiche un personnage avec bouton "Détails"
3. Popup.jsx - Affiche les détails complets du personnage

## Fonctionnalités

- Récupération de données depuis une API externe
- Interaction utilisateur (clics sur maisons et personnages)
- Composants réutilisables pour une meilleure organisation
- Utilisation de React Hooks (useState, useEffect)
- Layout responsive avec sidebar et contenu principal

## Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Accéder à l'application
# http://localhost:5173
```

## Technologies utilisées

- React 19 - Framework JavaScript
- Vite - Build tool rapide
- CSS Modules - Styles scopés
- API A Song of Ice and Fire - Source de données