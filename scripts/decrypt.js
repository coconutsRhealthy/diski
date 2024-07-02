const fs = require('fs');
const dataDirectivePath = 'src/app/data/data.directive.ts';

function decrypt(lineToDecrypt) {
    lineToDecrypt = lineToDecrypt.split('').reverse().join('');

    function shiftChar(char, start, end, shift) {
        let code = char.charCodeAt(0);
        let shifted = code - shift;

        if (shifted < start) {
            shifted = end - (start - shifted - 1);
        }

        return String.fromCharCode(shifted);
    }

    let decrypted = '';
    for (let char of lineToDecrypt) {
        if (char >= 'a' && char <= 'z') {
            decrypted += shiftChar(char, 'a'.charCodeAt(0), 'z'.charCodeAt(0), 3);
        } else if (char >= 'A' && char <= 'Z') {
            decrypted += shiftChar(char, 'A'.charCodeAt(0), 'Z'.charCodeAt(0), 3);
        } else if (char >= '0' && char <= '9') {
            decrypted += (parseInt(char) + 1).toString();
        } else if (char === '#') {
            decrypted += '0';
        } else {
            decrypted += char;
        }
    }

    return " " + decrypted;
}

function decryptSegment(line) {
  const segments = line.split(',');
  if (segments.length >= 4) {
      const segmentToDecrypt = segments[3].trim();
      const decryptedSegment = decrypt(segmentToDecrypt);
      segments[3] = decryptedSegment;
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
  const decryptedLines = lines.map(line => {
    if (line.trim().startsWith('static dataArray = [')) {
        inDataArray = true;
        return line;
    }
    if (inDataArray && line.trim().endsWith('];')) {
        inDataArray = false;
        return line;
    }
    if (inDataArray) {
        return decryptSegment(line);
    }
    return line;
  });

  const decryptedData = decryptedLines.join('\n');

  fs.writeFile(dataDirectivePath, decryptedData, 'utf8', err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File has been decrypted successfully.');
  });
});
