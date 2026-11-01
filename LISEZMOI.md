# Agora 340 · Test 2 : révision du Test de compréhension 2 (Philosophie et rationalité, 340-101-MQ)

Fait le 1er novembre 2026 à partir des PDF du dossier `Grasset Session 1\Philo 2` (L'argumentation rationnelle, cours 10, 12, 15, 16, 17, Platon, Thank You for Smoking, Guide de révision). Même moteur et même design qu'Agora 340 (Test 1, dossier `philo-revision`).

## Ouvrir
- **En ligne, sans compte** : https://vaelordesign.github.io/agora-340-t2/ (dépôt public `vaelordesign/agora-340-t2`, GitHub Pages servi depuis `docs/`, noindex).
- Artifact (privé) : https://claude.ai/artifact/HxiQXxfrURUMztwpJVnuYL (republier `agora-340-t2.html` avec ce `url`).
- Copie hors ligne : `Grasset Session 1\Philo 2\Agora-340-Test-2.html` (écrite par `node build.js`).
- La progression reste dans le navigateur (localStorage, clé `agora-340-t2`).

## Contenu
- **Express 25 min** (vue d'ouverture) : bloc A choix multiples, bloc B seize réponses courtes, bloc C cinq plans de développement, bloc D mini-test.
- **Fiches** : 16 fiches + le guide (s0), sommaire, cases « je maîtrise », « Quiz sur cette fiche », **mode récitation** (les mots en gras deviennent des blocs à révéler).
- **Quiz** : 291 questions (151 QCM, 70 V/F, 57 courtes, 13 développements).
- **Examen blanc** : 32 questions, chrono 2 h. **Cartes éclair** : les 57 courtes.

## Modifier
- `parts/a-head.html` (CSS d'Agora) + `parts/a-extra.css` (ajouts : récitation, fenêtre de confirmation, listes `.kv`).
- `parts/f-express.html`, `parts/b1-fiches.html` (en-tête, sommaire, s0 à s8), `parts/b2-fiches.html` (s9 à s16), `parts/c-views.html`.
- `parts/d-core.js` : groupes, types, questions à développement (`DEVS`). `parts/bank/bank-a..d.json` : QCM, V/F, courtes (format dans `parts/bank/SPEC.md`).
- `parts/e-app.js` : moteur d'Agora ; `confirm()` remplacé par `ask()` (bloqué dans un Artifact), bouton Imprimer caché dans un Artifact.
- `node build.js` vérifie la banque et écrit `agora-340-t2.html`, `docs/index.html` et la copie hors ligne. Puis `git add -A`, commit, push. `node serve.js` : http://localhost:8770/.
- `txt/` (diapos extraites et première version du guide) est exclu du dépôt.

## Points d'attention
- La fiche du film résume le film : les diapos n'ont que les questions de visionnement.
- Les corrigés d'exercices sont déduits des définitions du cours (cas incertains signalés).
