const cipherText = process.argv[2]; // the ciphertext is taken from the command line as an argument

const decoder = {
    shift: 0,
    brute(cipherText) {
        // let shift = 0;
        while (decoder.shift < 26) {
            let output = '';
            for (let i=0; i<cipherText.length; i++) {

                let char = cipherText[i];
                if (char.match(/[a-z]/i)) {
                    let code = cipherText.charCodeAt(i);
                    if (code >= 65 && code <= 90) {
                        char = String.fromCharCode(((code - 65 + decoder.shift) % 26) + 65);
                    } else if (code >= 97 && code <= 122) {
                        char = String.fromCharCode(((code - 97 + decoder.shift) % 26) + 97);
                    }
                }
                
                output += char;            
            }
            console.log(`Shift: ${decoder.shift}`);
            console.log(`Output: ${output}`);
            decoder.shift++;
        }
    }

}

decoder.brute(cipherText);

// EXPORTS
module.exports = decoder;