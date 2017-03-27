# Exercice Web

## Énoncé

### Partie 1
Produire une interface Web permettant
la sélection d'une ville parmi la liste fournie dans le fichier `cities.json`.

Cette interface doit présenter une suite de menus déroulants permettant d'affiner
la sélection :
- Un premier pour le choix de la région
- Un deuxième pour choisir un département parmi ceux de la région sélectionnée
- Un dernier pour choisir une ville parmi celles du département sélectionné

Le choix des librairies utilisées est libre.

### Partie 2
La page créée doit présenter un titre (au contenu quelconque) positionné de manière standard
tant qu'il est à moins de `10px` du haut de la fenêtre puis positionné de manière fixe ensuite — de cette
manière le titre reste toujours visible.

Ce comportement est similaire à celui obtenu avec la valeur `sticky` de la propriété CSS `position`
mais celle-ci ne peut être utilisée à l'heure actuelle car elle n'est pas disponible sur l'ensemble
des navigateurs courants.


## Rendu
Le rendu attendu est un unique document HTML accompagné d'autant de fichiers
JavaScript et CSS que nécessaire. Les données contenues dans `cities.json` peuvent être inclues directement
dans le fichier HTML ou dans un fichier JavaScript, un backend n'est pas nécessaire.

Si ces fichiers ont été générés à l'aide d'outils, inclure également les fichiers
sources ainsi que le détail du procès permettant de les générer.
