import { isIP } from '../ip';

export function validateSettings(data: string | object): boolean {
  let settings: any;
  if (typeof data === 'string') {
    settings = JSON.parse(data);
  } else {
    settings = data;
  }
  if (!settings.projectPath) return false;
  if (!settings.ipScopes.some((v: any) => !!((v.start && isIP(v.start)) || (v.end && isIP(v.end))))) return false;
  return true;
}
