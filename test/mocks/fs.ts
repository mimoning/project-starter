const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create(null);

function __setMockFiles(newMockFiles: any): void {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    mockFiles[file] = newMockFiles[file];
  }
}

function readFile(filePath: string, callback: (err: any, data: Buffer) => void) {
  const data = new Buffer(JSON.stringify(mockFiles[filePath] || {}));
  callback(null, data);
}

Object.defineProperties(fs, {
  __setMockFiles: { value: __setMockFiles },
  readFile: { value: readFile },
});

export default fs;
