const fs = require('fs');
const path = require('path');

const dataDirectivePaths = [
  'src/app/data/data.directive.ts',
  'src/app/data/archivedata.directive.ts'
];

dataDirectivePaths.forEach(dataDirectivePath => {
  const dir = path.dirname(dataDirectivePath);
  const base = path.basename(dataDirectivePath);
  const backupPath = path.join(dir, `backup_${base}`);

  fs.readFile(backupPath, 'utf8', (err, backupData) => {
    if (err) {
      console.error(`Error reading backup file ${backupPath}:`, err);
      return;
    }

    fs.writeFile(dataDirectivePath, '', 'utf8', err => {
      if (err) {
        console.error(`Error clearing content of ${dataDirectivePath}:`, err);
        return;
      }

      fs.writeFile(dataDirectivePath, backupData, 'utf8', err => {
        if (err) {
          console.error(`Error writing content from ${backupPath} to ${dataDirectivePath}:`, err);
          return;
        }

        console.log(`Restored content from ${backupPath} to ${dataDirectivePath} successfully.`);

        fs.unlink(backupPath, err => {
          if (err) {
            console.error(`Error deleting backup file ${backupPath}:`, err);
            return;
          }

          console.log(`Backup file ${backupPath} deleted successfully.`);
        });
      });
    });
  });
});
