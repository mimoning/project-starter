
function isIP(ip: string): boolean {
  const ipReg: RegExp = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d))$/;
  return ipReg.test(ip);
}

type BigOrSmall = '>' | '<' | '=';

function compareIP(ip1: string, ip2: string): BigOrSmall {
  if (!isIP(ip1) || !isIP(ip2)) throw new Error('Both of two arguments should be "IP"');
  const arr1 = ip1.split('.').map(v => parseInt(v));
  const arr2 = ip2.split('.').map(v => parseInt(v));

  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] === arr2[i]) continue;
    if (arr1[i] > arr2[i]) return '>';
    else return '<';
  }

  return '=';
}

function plusIP(ip: string, n: number): string {
  if (!isIP(ip)) throw new Error('The first argument should be an "IP"');
  const arr = ip.split('.').map(v => parseInt(v));
  let num = n;
  let i = 3;
  do {
    let sum = arr[i] + num;
    arr[i] = sum % 256;
    num = Math.floor(sum / 256);
    i--;
  } while (num >= 0 && i >= 0);
  if (i <= 0 && num > 0) {
    throw new Error(`The plus number is too big to count with "${ip}"`);
  }
  return arr.join('.');
}

function countIP(ip1: string, ip2: string): string[] {
  if (!isIP(ip1) || !isIP(ip2)) throw new Error('Both of two arguments should be "IP"');
  if (ip1 === ip2) return [ip1];
  const compared = compareIP(ip1, ip2);
  let [start, end] = compared === '>' ? [ip2, ip1] : [ip1, ip2];
  const ips: string[] = [start];

  do {
    start = plusIP(start, 1);
    ips.push(start);
  } while (compareIP(start, end) === '<');

  return ips;
}

export {
  compareIP,
  countIP,
  isIP,
  plusIP,
}