# Format de la banque de questions (Agora 340 · Test 2)

Chaque fichier `bank-X.json` est un tableau JSON valide (UTF-8, guillemets doubles, aucune virgule finale).

## Les fiches (champ `s`)

| s | Fiche |
|---|---|
| s1 | Les types de discours (magico-superstitieux, religieux, scientifique, philosophique ; les 5 questions pour rester critique) |
| s2 | La logique et les 4 principes de l'argumentation |
| s3 | La proposition et les 4 types de jugements (fait, préférence, valeur, prescription ; autres noms ; 4 jugements de fait singulière/particulière/universelle/indéfinie) |
| s4 | Force et véracité des jugements (critères d'évaluation de chaque type) |
| s5 | La structure du raisonnement (prémisses, conclusion, bien formé ou non) |
| s6 | Raisonnements déductif et inductif |
| s7 | Évaluer un raisonnement : acceptabilité, pertinence, suffisance |
| s8 | Les sophismes (11 sophismes classés par critère) |
| s9 | Le film Thank You for Smoking |
| s10 | Platon : repères (vie, Socrate, Académie, dialogues, doxa et logos, monde sensible changeant) |
| s11 | La théorie des Formes |
| s12 | L'allégorie de la caverne |
| s13 | Le rôle de la philosophie selon Platon |
| s14 | L'âme tripartite, les vertus, le conflit intérieur |
| s15 | La philosophie politique de Platon (cité idéale, justice, critique) |
| s16 | La liberté et la maîtrise de soi |

## Les types (champ `t`)

```json
{"id":"a001","s":"s1","t":"qcm","q":"Énoncé ?","o":["choix A","choix B","choix C","choix D"],"a":1,"w":"Explication courte."}
{"id":"a002","s":"s1","t":"vf","q":"Affirmation à juger.","a":false,"w":"Faux. Pourquoi, en une ou deux phrases."}
{"id":"a003","s":"s1","t":"courte","q":"Question à réponse courte ?","m":"<p>Réponse modèle en HTML simple (<b>, <ul><li>, <p>).</p>","k":["mot-clé 1","mot-clé 2","mot-clé 3"]}
```

- `qcm` : exactement 4 options `o`, `a` = index (0 à 3) de la bonne réponse. Varie la position de la bonne réponse. Les mauvaises options doivent être plausibles (vrais termes du cours mal associés), jamais absurdes.
- `vf` : `a` vaut `true` ou `false`. Environ la moitié de faux. Le `w` commence par « Vrai. » ou « Faux. ».
- `courte` : `m` = réponse modèle en HTML (2 à 6 lignes), `k` = 3 à 6 mots-clés attendus. Ce sont aussi les cartes-éclair : la question doit se comprendre seule.
- `w` : 1 ou 2 phrases, qui donnent la raison avec les mots du cours.

## Règles de contenu

1. Le contenu vient des diapos de la prof (dossier `txt/`, encodé UTF-8) et de `txt/guide-v1.html` (le guide déjà rédigé, fidèle aux diapos). Reprends les **mots exacts de la prof** : c'est un examen de par cœur. N'invente aucune notion qui n'est pas dans le cours.
2. Pour le film (s9), les diapos ne donnent que des questions : appuie-toi uniquement sur la section film de `txt/guide-v1.html`, sans ajouter de détails.
3. Français soigné avec accents. **Aucun tiret long (— ou –) dans les textes** : utilise point, virgule ou deux-points. Guillemets français « ».
4. Chaque question doit être autonome et non ambiguë : une seule bonne réponse défendable avec le cours.
5. Pas de question piège sur des détails sans importance. Vise ce qu'un examen de compréhension demanderait : définitions, associations, distinctions, exemples du cours, pièges classiques (ex. le lien causal douteux est classé en pertinence).
6. Les `id` commencent par la lettre de ton fichier (a, b, c ou d) suivie de 3 chiffres, sans doublon.
