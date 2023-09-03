import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Mock Demo',
  },
  routes: [
    {
      path: '/',
      redirect: '/demo1',
    },
    {
      name: ' Demo1',
      path: '/demo1',
      component: './Demo1',
    },
    {
      name: ' Demo2',
      path: '/demo2',
      component: './Demo2',
    },
    {
      name: ' Demo3',
      path: '/demo3',
      component: './Demo3',
    },
    {
      name: ' Demo4',
      path: '/demo4',
      component: './Demo4',
    },
    {
      name: ' Demo5',
      path: '/demo5',
      component: './Demo5',
    },
  ],
  npmClient: 'pnpm',
});
