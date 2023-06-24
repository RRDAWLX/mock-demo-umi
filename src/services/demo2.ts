import { request } from '@umijs/max';

export async function queryList(params: { [key: string]: any }) {
  return request('/api/demo1/list', {
    method: 'GET',
    params,
  });
}
