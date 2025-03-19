import { RouteRecordRaw } from 'vue-router';
import {
  VGMACCV2Key,
  VGMACCV1Key,
  AnamnesisKey,
  CommissionsV1Key,
  PotentFlaskKey,
} from 'src/service/albums';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'music',
        name: 'music',
        children: [
          {
            path: '',
            name: 'music-listing',
            component: () => import('pages/MusicPage.vue'),
          },
          {
            path: VGMACCV2Key,
            name: VGMACCV2Key,
            component: () => import('pages/VGMACCV2Page.vue'),
          },
          {
            path: VGMACCV1Key,
            name: VGMACCV1Key,
            component: () => import('pages/VGMACCV1Page.vue'),
          },
          {
            path: AnamnesisKey,
            name: AnamnesisKey,
            component: () => import('pages/AnamnesisPage.vue'),
          },
          {
            path: CommissionsV1Key,
            name: CommissionsV1Key,
            component: () => import('pages/CommissionsV1Page.vue'),
          },
          {
            path: PotentFlaskKey,
            name: PotentFlaskKey,
            component: () => import('pages/PotentFlaskPage.vue'),
          },
        ],
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/BioPage.vue'),
      },
      // legacy redirects
      { path: 'albums', redirect: { name: 'music-listing' } },
      { path: 'potent-flask', redirect: { name: PotentFlaskKey } },
      { path: 'commissions-vol-i', redirect: { name: CommissionsV1Key } },
    ],
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
