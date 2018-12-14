import { checkIP, getVersions } from './api';
import { IPHealthyData, IPWithVersion } from './types';

interface IPData extends IPHealthyData, IPWithVersion {};

/**
 * 获取所有安装了 DCE 的节点 IP
 * @param {string[]} ips IP 组成的数组
 * @return {Promise} 返回一个 promise
 */
async function getAvailableIPs(ips: string[]): Promise<IPHealthyData[]> {
  const availableIPs: IPHealthyData[] = [];
  for (let i = 0; i < ips.length; i++) {
    const res = await checkIP(ips[i]);
    if (!!res.healthyData) {
      availableIPs.push(res);
    }
  }
  return availableIPs;
}

/**
 * 获取所有的
 * @param {string[]} ips IP 组成的数组
 * @return {Promise} 返回一个 promise
 */
async function getIPsVersion(ips: IPHealthyData[]): Promise<IPData[]> {
  const result: IPData[] = [];

  for (let i = 0; i < ips.length; i++) {
    const res = await getVersions(ips[i].ip);
    result.push(Object.assign({}, ips[i], res));
  }
  
  return result;
}

export default async function checkIPs(ips: string[]): Promise<IPData[]> {
  const availableIPs = await getAvailableIPs(ips);
  const resultIPs = await getIPsVersion(availableIPs);
  return resultIPs;
}
