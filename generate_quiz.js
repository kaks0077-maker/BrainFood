const fs = require('fs');
const https = require('https');

const API_KEY = 'YOUR_API_KEY_HERE';

const cards = JSON.parse(fs.readFileSync('_cards.json', 'utf8'));
const pubCards = cards.filter(c => c.cat === 'pub');
console.log('Found', pubCards.length, 'pub quiz cards');

async function callClaude(fact) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      messages: [{ role: 'user', content: `Convert this fact into a pub quiz multiple choice question.\n\nFACT: "${fact}"\n\nRules:\n- Write a clear engaging question\n- Exactly 4 options: A, B, C, D\n- Only ONE correct answer\n- Other 3 plausible but wrong\n- difficulty: easy medium or hard\n- Respond ONLY with raw JSON no markdown\n\n{"question":"...","answers":{"A":"...","B":"...","C":"...","D":"..."},"correct":"A","difficulty":"easy"}` }]
    });
    const req = https.request({ hostname: 'api.anthropic.com', path: '/v1/messages', method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY, 'anthropic-version': '2023-06-01' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => { try { const p = JSON.parse(data); const text = p.content[0].text.replace(/```json|```/g,'').trim(); resolve(JSON.parse(text)); } catch(e) { reject(e); } });
    });
    req.on('error', reject); req.write(body); req.end();
  });
}

async function generateAll() {
  const results = [];
  for (let i = 0; i < pubCards.length; i++) {
    const card = pubCards[i];
    console.log(`[${i+1}/${pubCards.length}] ${card.fact.substring(0,60)}...`);
    try {
      const q = await callClaude(card.fact);
      results.push({ id: card.id, fact: card.fact, ...q });
      console.log(`  ? ${q.difficulty} - ${q.question.substring(0,50)}`);
    } catch(e) { console.log(`  ? Skipped: ${e.message}`); }
    await new Promise(r => setTimeout(r, 400));
    if ((i+1) % 25 === 0) { fs.writeFileSync('quiz_progress.json', JSON.stringify(results, null, 2)); console.log(`\n?? Saved ${results.length} so far\n`); }
  }
  fs.writeFileSync('quiz_data.json', JSON.stringify(results, null, 2));
  const output = `const QUIZ_DATA = ${JSON.stringify(results, null, 2)};\n\nmodule.exports = QUIZ_DATA;`;
  fs.writeFileSync('quiz_data.js', output);
  console.log(`\n?? Done! ${results.length} questions saved to quiz_data.js`);
}

generateAll();
