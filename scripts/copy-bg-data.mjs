import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve('node_modules/@imgly/background-removal-data/dist');
const dest = path.resolve('public/bg-data');

if (!fs.existsSync(path.join(src, 'resources.json'))) {
  console.warn('[bg-data] @imgly/background-removal-data not found, skipping');
  process.exit(0);
}

const all = JSON.parse(fs.readFileSync(path.join(src, 'resources.json'), 'utf8'));
const keep = Object.fromEntries(
  Object.entries(all).filter(
    ([k]) => k === '/models/small' || (k.includes('onnxruntime-web') && !k.includes('jsep') && !k.includes('training'))
  )
);

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
fs.writeFileSync(path.join(dest, 'resources.json'), JSON.stringify(keep));
for (const entry of Object.values(keep)) {
  for (const c of entry.chunks) fs.copyFileSync(path.join(src, c.hash), path.join(dest, c.hash));
}
console.log(`[bg-data] copied ${Object.keys(keep).length} resources to public/bg-data`);
