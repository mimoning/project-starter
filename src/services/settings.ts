import { SettingsData } from "../types";

type SettingsResolve = (data: SettingsData) => void;

export function readSettingsFile(): Promise<any> {
  const settingsFilePath = `${window.electron.remote.app.getPath('userData')}/settings.json`;
  return new Promise((resolve: SettingsResolve, reject: Function) => {
    window.fs.readFile(settingsFilePath, (err: any, data: Buffer) => {
      if (err) {
        reject(err);
      };
      const json = data ? data.toString() : '';
      try {
        const initData = JSON.parse(json);
        resolve(initData)
      } catch (e) {
        reject(e);
      }
    })
  });
  // 
}
