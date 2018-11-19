import path from 'path';

const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create(null);

function __setMockFiles(newMockFiles: {}[]): void {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file))
  }
}

function readFile(directoryPath: string) {
  return mockFiles[directoryPath] || []
}

Object.defineProperties(fs, {
  __setMockFiles: { value: __setMockFiles },
  readFile: { value: readFile },
});

export default fs;
