import DashboardLayout from "../pages/Layout/DashboardLayout.vue";

import Dashboard from "../pages/Dashboard.vue";
import UserProfile from "../pages/UserProfile.vue";
import TableList from "../pages/TableList.vue";
import Typography from "../pages/Typography.vue";
import Icons from "../pages/Icons.vue";
import Maps from "../pages/Maps.vue";
import Notifications from "../pages/Notifications.vue";
import UpgradeToPRO from "../pages/UpgradeToPRO.vue";
import UserDetail from "../pages/UserProfile/UserForm.vue"
import UserCreate from "../pages/UserProfile/UserCreate.vue"
import Login from "../pages/Login.vue"
import Error404 from "../pages/errors/404.vue"
import Error500 from "../pages/errors/500.vue"

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
      path: '/login',
      component: Login,
      name: 'login',
      meta: {
          auth: false
      }
  },
  {
      path: '/dashboard',
      component: DashboardLayout,
      name: 'dashboard',
      meta: {
          auth: true
      },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: "/user",
          name: "User Profile",
          component: UserProfile,
        },
        {
          path: '/user/create',
          name: 'User Create',
          component: UserCreate
        },
        {
          path: '/user/:id',
          name: 'User Detail',
          component: UserDetail
        },
      ]
  },
  // {
  //     path: '/verify/email',
  //     component: Verify,
  //     name: 'verify',
  //     meta: {
  //         auth: true
  //     }
  // },
  {
    path: '/404', name: 'error404', component: Error404
  },
  {
    path: '/500', name: 'error500', component: Error500
  },
  // {
  // path: '*', redirect: '/404'
  // }
];

export default routes;
