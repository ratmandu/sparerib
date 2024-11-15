const fs = require('fs');

const headerLen = 576;
const secret_key = [30,39,27,18,17,22,25,23,36,37,41,28,13,11,6,4,3,1,2,5,7,12,14,15,24,29,32,34,42,43,8,9,10,16,19,20,21,26,31,33,40,35,38]
var filename = "";

if (process.argv.length != 3) {
  console.error('You need to provide a filename to decode');
  console.error('example: node decode.js ./firmwarefile.sfl');
  process.exit(1);
}

filename = process.argv[2];

console.log('Reading file:', filename);
var sflFile = [];

try {
  const filedata = fs.readFileSync(filename);
  sflFile = new Uint8Array(filedata);
  console.log(sflFile.length, 'bytes read');
} catch (err) {
  console.error('Error reading file:', err);
}

const sflHeader = Buffer.copyBytesFrom(sflFile, 0, headerLen);
const sflData = Buffer.copyBytesFrom(sflFile, headerLen);

var decodedData = Buffer.alloc(sflData.length);
var num = 0;
for (var index1 = 0; index1 < sflData.length; ++index1) {
  var index2 = num % secret_key.length;
  decodedData[index1] = sflData[index1] - secret_key[index2];
  num = index2 + 1;
}

const decodedFileName = filename + '.bin';

console.log('Writing decoded file:', decodedFileName);
fs.writeFileSync(decodedFileName, decodedData);
