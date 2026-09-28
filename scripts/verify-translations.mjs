import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const enPath = path.join(rootDir, 'src', 'messages', 'en.json');
const hiPath = path.join(rootDir, 'src', 'messages', 'hi.json');
const paPath = path.join(rootDir, 'src', 'messages', 'pa.json');

function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys = keys.concat(getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

try {
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const hiData = JSON.parse(fs.readFileSync(hiPath, 'utf8'));
  const paData = JSON.parse(fs.readFileSync(paPath, 'utf8'));

  const enKeys = new Set(getAllKeys(enData));
  const hiKeys = new Set(getAllKeys(hiData));
  const paKeys = new Set(getAllKeys(paData));

  let hasError = false;

  const missingInHi = [...enKeys].filter((k) => !hiKeys.has(k));
  if (missingInHi.length > 0) {
    console.error(`❌ Translation validation error: ${missingInHi.length} keys missing in hi.json:`);
    console.error(missingInHi.join('\n'));
    hasError = true;
  }

  const missingInPa = [...enKeys].filter((k) => !paKeys.has(k));
  if (missingInPa.length > 0) {
    console.error(`❌ Translation validation error: ${missingInPa.length} keys missing in pa.json:`);
    console.error(missingInPa.join('\n'));
    hasError = true;
  }

  if (hasError) {
    process.exit(1);
  }

  console.log(`✅ Translation validation passed: all ${enKeys.size} keys match across en.json, hi.json, and pa.json.`);
} catch (err) {
  console.error('❌ Failed to verify translations:', err);
  process.exit(1);
}
