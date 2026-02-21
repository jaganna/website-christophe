# Comment publier un article de blog

Ce guide explique comment ajouter un nouvel article sur le site, directement depuis GitHub.

## Étape 1 : Accéder au dossier des articles

1. Rendez-vous sur le dépôt GitHub du site
2. Naviguez vers le dossier `src/content/blog/`

## Étape 2 : Créer un nouveau fichier

1. Cliquez sur le bouton **"Add file"** puis **"Create new file"**
2. Nommez le fichier avec un nom descriptif en minuscules, sans espaces ni accents, terminé par `.md`
   - Exemple : `conformite-csrd-2026.md`
   - Ce nom deviendra l'URL de l'article : `christophe-bach.fr/blog/conformite-csrd-2026`

## Étape 3 : Rédiger l'article

Chaque article commence par un bloc d'en-tête entre `---`. Copiez ce modèle et adaptez-le :

```markdown
---
title: "Le titre de votre article"
description: "Une courte description pour le référencement (1-2 phrases)"
date: 2026-02-21
draft: false
tags: ["conformité", "EU"]
---

Le contenu de votre article commence ici.

## Sous-titre

Vous pouvez utiliser des sous-titres avec ##.

### Sous-sous-titre

Et des sous-sous-titres avec ###.

Vous pouvez mettre du texte en **gras** ou en *italique*.

- Liste à puces
- Deuxième point
- Troisième point

1. Liste numérotée
2. Deuxième étape
3. Troisième étape

> Citation ou mise en avant d'une idée importante.
```

## Étape 4 : Publier

1. En bas de la page, dans la section **"Commit changes"**, écrivez un court message décrivant votre ajout (ex : "Ajout article sur la CSRD")
2. Laissez l'option **"Commit directly to the main branch"** sélectionnée
3. Cliquez sur **"Commit changes"**

Le site sera automatiquement mis à jour dans les 1-2 minutes qui suivent.

## Brouillons

Pour sauvegarder un article sans le publier, mettez `draft: true` dans l'en-tête :

```markdown
---
title: "Mon brouillon"
description: "..."
date: 2026-02-21
draft: true
tags: []
---
```

L'article ne sera pas visible sur le site tant que `draft` est à `true`.

## Modifier un article existant

1. Naviguez vers le fichier dans `src/content/blog/`
2. Cliquez sur l'icône crayon (modifier) en haut à droite du fichier
3. Faites vos modifications
4. Cliquez sur **"Commit changes"**

## Supprimer un article

1. Naviguez vers le fichier
2. Cliquez sur les trois points (**...**) en haut à droite
3. Sélectionnez **"Delete file"**
4. Confirmez la suppression
