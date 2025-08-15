// encode.js  (ESM)
import { pathToFileURL } from 'url';

const normalizeShift = n => ((n % 26) + 26) % 26;

export function caesarEncode(text, shift) {
    const s = normalizeShift(Number(shift));
    let out = '';
    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            out += String.fromCharCode(((code - 65 + s) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            out += String.fromCharCode(((code - 97 + s) % 26) + 97);
        } else {
            out += text[i];
        }
    }
    return out;
}

// Run when invoked directly (ESM equivalent of require.main === module)
const isDirectRun = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirectRun) {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.error('Usage: node encode.js "Hello, World!" 3');
        process.exit(1);
    }
    const rawShift = Number(args.pop());
    if (Number.isNaN(rawShift)) {
        console.error('Shift must be a number');
        process.exit(1);
    }
    const plainText = args.join(' ');
    const removedSpaces = plainText.trim().replaceAll(/\s+/g, '');

    console.log(caesarEncode(removedSpaces, rawShift));
}

export default caesarEncode;
