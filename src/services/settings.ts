export function readSettingsFile(success?: (data: object) => void, error?: (err: any) => void): void {
  const settingsFilePath = `${window.electron.remote.app.getPath('userData')}/settings.json`;
  window.fs.readFile(settingsFilePath, (err: any, data: Buffer) => {
    if (err && error) {
      error(err);
      return;
    };
    const json = data ? data.toString() : '';
    try {
      const initData = JSON.parse(json);
      if (success) success(initData);
    } catch (e) {
      if (error) error(e);
    }
  })
}
