import { request } from '@umijs/max';

export function queryList(demoPath: string) {
  return (params: { [key: string]: any }) => {
    return request(`/api/${demoPath}/list`, {
      method: 'GET',
      params,
    });
  };
}

export function getStatusList(demoPath: string) {
  return () => {
    return request(`/api/${demoPath}/status`);
  };
}
