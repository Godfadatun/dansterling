
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MyLayouts.vue'),
    children: [
      { path: '', name: 'index', component: () => import('../pages/Index.vue') },
      { path: 'people', name: 'people', component: () => import('../pages/People.vue') },
      { path: 'ships', name: 'ships', component: () => import('../pages/Ships.vue') },
      { path: 'details', name: 'details', component: () => import('../pages/Details.vue'), props:true },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
// npm install dotenv
