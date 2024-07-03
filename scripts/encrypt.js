const fs = require('fs');
const path = require('path');
const dataDirectivePaths = ['src/app/data/data.directive.ts', 'src/app/data/archivedata.directive.ts'];

function encryptSegment(line) {
  const segments = line.split(',');
  if (segments.length >= 4) {
      segments[3] = " zzz";
  }
  return segments.join(',');
}

dataDirectivePaths.forEach(dataDirectivePath => {
  const dir = path.dirname(dataDirectivePath);
  const base = path.basename(dataDirectivePath);
  const backupPath = path.join(dir, `backup_${base}`);

  fs.copyFile(dataDirectivePath, backupPath, err => {
    if (err) {
      console.error(`Error copying file ${dataDirectivePath} to ${backupPath}:`, err);
      return;
    }
    console.log(`File copied from ${dataDirectivePath} to ${backupPath}`);

    fs.readFile(dataDirectivePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const lines = data.split('\n');
      let inDataArray = false;
      const encryptedLines = lines.map(line => {
        if (line.trim().startsWith('static dataArray = [') || line.trim().startsWith('static dataArrayArchive = [')) {
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

        console.log('File ' + dataDirectivePath + ' has been encrypted successfully.');
      });
    });
  });
});
