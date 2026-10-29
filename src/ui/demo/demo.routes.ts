import type { RouteRecordRaw } from 'vue-router';

const demoPages = import.meta.glob('../*/*.demo.vue', { eager: true });

export const demoRoutes = Object.keys(demoPages).map((demoComponentPath) => {
  const [, , fileName] = demoComponentPath.split('/');
  const demoComponentName = fileName.split('.').shift();

  return {
    path: demoComponentName,
    name: demoComponentName,
    component: () => import(/* @vite-ignore */ demoComponentPath),
  } as RouteRecordRaw;
});

export const routes = [
  {
    path: '/c-lib',
    name: 'c-lib',
    children: [
      {
        path: '',
        name: 'c-lib-index',
        component: () => import('./demo-home.page.vue'),
      },
      ...demoRoutes,
    ],
    component: () => import('./demo-wrapper.vue'),
  },
];
