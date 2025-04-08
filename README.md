# Portfolio de Sébastien LUCAS

Ce dépôt contient le code source de mon portfolio personnel, développé avec React et Vite. L'objectif de ce projet est de présenter mes compétences, mes projets et mon parcours professionnel aux recruteurs.

## Démo Live 🚀

Vous pouvez consulter la version déployée ici : **[https://port-folio-react-lime.vercel.app/](https://port-folio-react-lime.vercel.app/)**

## Fonctionnalités Principales ✨

*   **Single Page Application (SPA) :** Navigation fluide entre les sections sans rechargement de page grâce à React Router.
*   **Présentation Structurée :** Sections dédiées pour "À Propos", "Compétences", "Projets", "Expériences", "Formation" et "Contact".
*   **Projets Dynamiques :** Récupération et affichage des projets directement depuis l'API GitHub.
    *   Section "Derniers Projets" sur la page d'accueil.
    *   Page dédiée `/Projets` listant tous les dépôts publics pertinents avec une vue plus concise.
*   **Composants Réutilisables :** Développement modulaire avec des composants tels que :
    *   `Carousel` (utilisé pour les Formations et Expériences).
    *   `ProjectCard` (vue détaillée d'un projet).
    *   `ProjectListItem` (vue concise pour la liste complète des projets).
    *   Composants pour l'affichage des langages (liste, barre de progression).
*   **Interactivité :**
    *   Mise en évidence de la section active dans le header lors du défilement.
    *   (Prochainement) Modal pour afficher les détails d'un projet depuis la liste complète.
    *   (Prochainement) Options de tri/filtre pour la page de tous les projets.
*   **Gestion d'État :** Utilisation d'un store (ex: Zustand/Jotai via `useStoreSectionVisible`) pour gérer l'état global de la section visible.
*   **Design Responsive :** Adaptation de l'affichage pour une consultation optimale sur différents appareils (ordinateur, tablette, mobile).

## Technologies Utilisées 🛠️

*   **Framework/Librairie :** React.js
*   **Build Tool :** Vite
*   **Langage :** JavaScript (ES6+)
*   **Styling :** CSS vanilla (avec utilisation de variables CSS `:root` pour la thématisation)
*   **Routing :** React Router DOM
*   **Gestion d'État :** Zustand
*   **API Externe :** API REST GitHub v3
*   **Déploiement :** Vercel


*(Note : Si une clé API GitHub est nécessaire pour dépasser les limites de taux ou accéder à des informations spécifiques, pensez à la configurer via des variables d'environnement (`.env`) non commitées).*

## Statut du Projet 🚧

Ce projet est actuellement en cours de développement et d'amélioration continue. De nouvelles fonctionnalités (comme le modal de détails des projets, le tri/filtre, finalisation de la section formations et contact etc...) et diverses optimisations (notamment CSS) sont prévues.