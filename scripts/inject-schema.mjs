import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join } from "path";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BuildLab",
  "url": "https://buildlab2.pages.dev",
  "logo": "https://buildlab2.pages.dev/favicon.ico",
  "description": "Polska agencja webowa — strony WWW, sklepy online, aplikacje webowe. Warszawa.",
  "address": { "@type": "PostalAddress", "addressLocality": "Warszawa", "addressCountry": "PL" },
  "sameAs": ["https://buildlab.pl"]
});

const INJECT = `<script type="application/ld+json">${SCHEMA}</script>`;

function processDir(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (entry.endsWith(".html")) {
      const html = readFileSync(fullPath, "utf8");
      if (html.includes('application/ld+json')) continue; // already has schema
      const injected = html.replace("</head>", `${INJECT}</head>`);
      if (injected !== html) {
        writeFileSync(fullPath, injected, "utf8");
        console.log(`  injected: ${fullPath.replace(process.cwd(), "")}`);
      }
    }
  }
}

console.log("inject-schema: processing out/");
processDir(join(process.cwd(), "out"));
console.log("inject-schema: done");
