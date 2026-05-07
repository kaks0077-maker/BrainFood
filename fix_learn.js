const fs = require('fs');

// Fix LearnScreen.js
let learn = fs.readFileSync('screens/LearnScreen.js', 'utf8');

// Remove Pub Quiz from CATS array
learn = learn.replace(
  `const CATS = [
  { id: 'all', label: '🌍 All' },
  { id: 'pub', label: '🍺 Pub Quiz' },
];`,
  `const CATS = [
  { id: 'all', label: '🌍 All' },
];`
);

// Fix all corrupted emojis
const emojiMap = {
  '?? Pub Quiz Special': '🍺 Pub Quiz Special',
  'BrainFood ??': 'BrainFood 🍕',
  '?? 1': '🔥 1',
  '?? Word of the Day': '📖 Word of the Day',
  '?? Hands-Free Mode': '🚗 Hands-Free Mode',
  '?? ALL': '🌍 ALL',
  '?? PUB QUIZ': '🍺 PUB QUIZ',
  '??\n': '',
};

Object.entries(emojiMap).forEach(([find, replace]) => {
  learn = learn.split(find).join(replace);
});

// Fix the Pub Quiz Special banner to have dark background
learn = learn.replace(
  `style={{ borderRadius: 18, marginBottom: 4, overflow: 'hidden', borderWidth: 1.5, borderColor: 'rgba(255,215,0,0.5)', backgroundColor: 'rgba(255,215,0,0.08)' }}`,
  `style={{ borderRadius: 18, marginBottom: 4, overflow: 'hidden', borderWidth: 1.5, borderColor: 'rgba(255,215,0,0.5)', backgroundColor: '#12120a' }}`
);

fs.writeFileSync('screens/LearnScreen.js', learn, 'utf8');
console.log('✅ LearnScreen.js fixed');

// Verify
const check = fs.readFileSync('screens/LearnScreen.js', 'utf8');
const pubQuizCats = (check.match(/id: 'pub'/g) || []).length;
console.log('Pub Quiz in CATS:', pubQuizCats, '(should be 0)');
console.log('Done!');
