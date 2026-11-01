// Assemble docs/index.html (GitHub Pages) à partir de ../Guide_etude_Test_2.html (la version Artifact).
// L'Artifact reçoit son squelette HTML à la publication ; ici on l'ajoute nous-mêmes.
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "..", "Guide_etude_Test_2.html"), "utf8");
const cut = src.indexOf("</style>") + "</style>".length;
const head = src.slice(0, cut);
const body = src.slice(cut);

const reset = "<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>";

const out = [
  "<!doctype html>",
  '<html lang="fr">',
  "<head>",
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<meta name="robots" content="noindex, nofollow">',
  reset,
  head,
  "</head>",
  "<body>" + body,
  "</body>",
  "</html>",
  ""
].join("\n");

fs.mkdirSync(path.join(__dirname, "docs"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "docs", "index.html"), out);
console.log("docs/index.html :", out.length, "caractères,", (out.match(/<\/html>/g) || []).length, "balise </html>");
