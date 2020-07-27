import VueRouter from 'vue-router';
// import Login from './components/auth/Login.vue';
// import Register from './components/auth/Register.vue';
// import DashboardLayout from './components/./main/DashboardLayout.vue';
// import Error404 from './components/Errors/404.vue';
// import Dashboard from './components/dashboard/Dashboard.vue';
// import ListUser from './components/users/ListUser.vue';
// import Verify from './components/auth/Verify.vue'

const routes = [
    {
        path: '/',
        component: () => import('./components/views/dashboard/Index'),
        children: [
          // Dashboard
          {
            name: 'Dashboard',
            path: '',
            component: () => import('./components/views/dashboard/Dashboard'),
          },
          // Pages
          {
            name: 'User Profile',
            path: 'pages/user',
            component: () => import('./components/views/dashboard/pages/UserProfile'),
          },
          {
            name: 'Notifications',
            path: 'components/notifications',
            component: () => import('./components/views/dashboard/component/Notifications'),
          },
          {
            name: 'Icons',
            path: 'components/icons',
            component: () => import('./components/views/dashboard/component/Icons'),
          },
          {
            name: 'Typography',
            path: 'components/typography',
            component: () => import('./components/views/dashboard/component/Typography'),
          },
          // Tables
          {
            name: 'Regular Tables',
            path: 'tables/regular-tables',
            component: () => import('./components/views/dashboard/tables/RegularTables'),
          },
          // Maps
          {
            name: 'Google Maps',
            path: 'maps/google-maps',
            component: () => import('./components/views/dashboard/maps/GoogleMaps'),
          },
          // Upgrade
          {
            name: 'Upgrade',
            path: 'upgrade',
            component: () => import('./components/views/dashboard/Upgrade'),
          },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;