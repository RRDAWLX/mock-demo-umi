import { request } from '@umijs/max';

export function queryList(params: { [key: string]: any }) {
  return request('/api/demo1/list', {
    method: 'GET',
    params,
  });
}

export function getStatusList() {
  return request('/api/demo1/status');
}
