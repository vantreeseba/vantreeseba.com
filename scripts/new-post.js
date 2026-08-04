#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawn } = require("child_process");

const BLOG_DIR = path.join(__dirname, "..", "src", "blog");
const TEMPLATE = path.join(__dirname, "post-template.md");

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const today = () => new Date().toISOString().split("T")[0];

// Bare YAML scalars break on ":", "#", quotes, leading indicators, etc.
const yamlString = (value) =>
  /^[A-Za-z0-9][A-Za-z0-9 ._()-]*$/.test(value)
    ? value
    : `'${value.replace(/'/g, "''")}'`;

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}

function openEditor(file) {
  const editor = process.env.VISUAL || process.env.EDITOR;
  if (!editor) {
    console.log("No $EDITOR or $VISUAL set — skipping editor.");
    return;
  }
  const [cmd, ...args] = editor.split(" ");
  const child = spawn(cmd, [...args, file], { stdio: "inherit" });
  child.on("error", (err) => console.error(`Could not launch ${editor}: ${err.message}`));
}

async function main() {
  const title = (process.argv.slice(2).join(" ") || (await ask("Post title: "))).trim();
  if (!title) {
    console.error("A title is required.");
    process.exit(1);
  }

  const slug = slugify(title);
  if (!slug) {
    console.error(`Could not derive a filename from "${title}".`);
    process.exit(1);
  }

  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (fs.existsSync(file)) {
    console.error(`${path.relative(process.cwd(), file)} already exists.`);
    process.exit(1);
  }

  const body = fs
    .readFileSync(TEMPLATE, "utf8")
    .replace(/{{TITLE}}/g, yamlString(title))
    .replace(/{{DATE}}/g, today())
    .replace(/{{SLUG}}/g, slug);

  fs.writeFileSync(file, body);
  console.log(`Created ${path.relative(process.cwd(), file)}  ->  /blog/${slug}/`);

  openEditor(file);
}

main();
