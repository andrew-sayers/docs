#!/usr/bin/env node

const fs = require("fs");
const library = require("../library/sleepdiary-library.min.js");

fs.writeFileSync(
    __filename.replace(/[^\/]*$/,"formats.md"),
    fs.readFileSync(__filename.replace(/[^\/]*$/,"formats.md.pre")).toString() +
    library.sleepdiary_engines.map( f => `* [${f.title}](${f.url})\n` ).join("") +
    fs.readFileSync(__filename.replace(/[^\/]*$/,"formats.md.post")).toString()
);
