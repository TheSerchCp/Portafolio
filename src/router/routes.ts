import AppLayout from "@/layout/AppLayout.vue";

//exportar el array de  rutas de la aplicación, para importarlo en index.ts de routes
const routes =  [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: []
    },
  ];

//Solo exportar los routes para importarlos en index.ts
export default routes;