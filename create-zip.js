import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const zip = new JSZip();

function addFolderToZip(folderPath, zip) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    if (file === 'node_modules' || file.endsWith('.zip')) continue;

    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      zip.file(filePath, fs.readFileSync(filePath));
    } else if (stats.isDirectory()) {
      addFolderToZip(filePath, zip.folder(file));
    }
  }
}

addFolderToZip('.', zip);

zip
  .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
  .pipe(fs.createWriteStream('tennis-club-management-system.zip'))
  .on('finish', function () {
    console.log('tennis-club-management-system.zip written.');
  });
