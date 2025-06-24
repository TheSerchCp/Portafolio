import AppLayout from "@/layout/AppLayout.vue";

//exportar el array de  rutas de la aplicación, para importarlo en index.ts de routes
const routes =  [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
        //Rutas hijas del home, la vista AboutHome.vue se carga en el AppLayout
        {
          path: '',
          name: 'about',
          component: () => import('@/views/AboutHome.vue'),

        }
      ]
    },
  ];

//Solo exportar los routes para importarlos en index.ts
export default routes;