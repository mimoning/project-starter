import $http from 'axios';
import { IPWithVersion, IPHealthyData } from '../types';

export async function checkIP(ip: string): Promise<IPHealthyData>{
  try {
    const res = await $http.get(`http://${ip}/dce/healthz`, { timeout: 500 });
    return { healthyData: res.data, ip};
  } catch {
    return { healthyData: null, ip };
  }
}

export async function getVersions(ip: string): Promise<IPWithVersion> {
  try {
    const res = await $http.get(`http://${ip}/dce/version`, { timeout: 500 });
    return { version: res.data.DCEVersion, ip };
  } catch {
    return { version: '', ip };
  }
}
