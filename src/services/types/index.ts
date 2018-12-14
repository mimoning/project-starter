export interface IPHealthyData {
  healthyData: {
    [key: string]: 'Healthy' | 'Unhealthy',
  } | null;
  ip: string;
}

export interface IPWithVersion {
  version: string;
  ip: string;
}
