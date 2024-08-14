const fs = require('fs');
const path = require('path');
const dataDirectivePaths = [
  'src/app/data/data.directive.ts',
//  'src/app/data/archivedata.directive.ts'
];

function extractData(line) {
  line = reformatLine(line);
  const segments = line.split(',');
  if (segments.length >= 5) {
    return {
      company: segments[0],
      discountCode: segments[1],
      discountPercentage: segments[2],
      date: formatDate(segments[4])
    };
  }
  return null;
}

function reformatLine(line) {
  line = line.replace(/"/, '');

  const lastIndex = line.lastIndexOf('"');
  if (lastIndex !== -1) {
    line = line.slice(0, lastIndex) + line.slice(lastIndex + 1);
  }

  line = line.replace(/, /g, ',');
  line = line.trim();
  return line;
}

function formatDate(dateStr) {
  const [month, day] = dateStr.split('-').map(Number);
  const date = new Date(2024, month - 1, day);
  const options = { day: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-GB', options);
}

let extractedData = [];

dataDirectivePaths.forEach(dataDirectivePath => {
  fs.readFile(dataDirectivePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const lines = data.split('\n');
    let inDataArray = false;

    lines.forEach(line => {
      if (line.trim().startsWith('static dataArray = [') || line.trim().startsWith('static dataArrayArchive = [')) {
        inDataArray = true;
      } else if (inDataArray && line.trim().endsWith('];')) {
        inDataArray = false;
      } else if (inDataArray) {
        const extracted = extractData(line);
        if (extracted) {
          extractedData.push(extracted);
        }
      }
    });

    if (dataDirectivePath === dataDirectivePaths[dataDirectivePaths.length - 1]) {
      fs.writeFile('diskidata.json', JSON.stringify(extractedData, null, 2), 'utf8', err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Extracted data has been written to diskidata.json');
      });
    }
  });
});
