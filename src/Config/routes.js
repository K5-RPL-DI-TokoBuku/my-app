import { Home, Login, Register } from '../pages';

const routes = [
  {
    path: "/login",
    component: Login,
    isPublic: true,
  },
  {
    path: "/register",
    component: Register,
    isPublic: true,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
