const fs = require('fs');
const cards = JSON.parse(fs.readFileSync('_cards.json'));
let data = fs.readFileSync('data.js', 'utf8');
const newArray = 'const CARDS = [\n  ' + cards.map(c => JSON.stringify(c)).join(',\n  ') + '\n];';
data = data.replace(/const CARDS = \[[\s\S]*?\];/, newArray);
fs.writeFileSync('data.js', data);
console.log('Written to data.js:', cards.length, 'cards');
