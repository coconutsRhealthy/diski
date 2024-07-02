const fs = require('fs');
const dataDirectivePath = 'src/app/data/data.directive.ts';

function encrypt(lineToEncrypt) {
    function shiftChar(char, start, end, shift) {
        let code = char.charCodeAt(0);
        let shifted = code + shift;

        if (shifted > end) {
            shifted = start + (shifted - end - 1);
        }

        return String.fromCharCode(shifted);
    }

    let encrypted = '';
    for (let char of lineToEncrypt) {
        if (char >= 'a' && char <= 'z') {
            encrypted += shiftChar(char, 'a'.charCodeAt(0), 'z'.charCodeAt(0), 3);
        } else if (char >= 'A' && char <= 'Z') {
            encrypted += shiftChar(char, 'A'.charCodeAt(0), 'Z'.charCodeAt(0), 3);
        } else if (char >= '0' && char <= '9') {
            if (char === '0') {
                encrypted += '#';
            } else {
                encrypted += (parseInt(char) - 1).toString();
            }
        } else {
            encrypted += char;
        }
    }

    if(encrypted.includes(",") || encrypted.includes('"') || encrypted.includes("'") || encrypted.includes(" ")) {
      console.log(encrypted);
    }

    encrypted = encrypted.split('').reverse().join('');

    return " " + encrypted;
}

function encryptSegment(line) {
  const segments = line.split(',');
  if (segments.length >= 4) {
      const segmentToEncrypt = segments[3].trim();
      const encryptedSegment = encrypt(segmentToEncrypt);
      segments[3] = encryptedSegment;
  }
  return segments.join(',');
}

fs.readFile(dataDirectivePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  let inDataArray = false;
  const encryptedLines = lines.map(line => {
    if (line.trim().startsWith('static dataArray = [')) {
        inDataArray = true;
        return line;
    }
    if (inDataArray && line.trim().endsWith('];')) {
        inDataArray = false;
        return line;
    }
    if (inDataArray) {
        return encryptSegment(line);
    }
    return line;
  });

  const encryptedData = encryptedLines.join('\n');

  fs.writeFile(dataDirectivePath, encryptedData, 'utf8', err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File has been encrypted successfully.');
  });
});
