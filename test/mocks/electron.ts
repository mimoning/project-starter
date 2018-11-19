const electron = {
  remote: {
    app: {},
  },
}

interface MockPath {
  [option: string]: string;
};

const MOCK_PATH: MockPath = {
  userData: '/PATH/userdata.json',
}

function getPath(option: string) {
  return MOCK_PATH[option];
}

Object.defineProperties(electron.remote.app, {
  getPath: { value: getPath }
})

export default electron;
