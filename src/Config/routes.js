import { Home, Login, Register, AddBook, Cart } from '../pages';

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
    path: "/cart",
    component: Cart,
    isPublic: true,
  },
  {
    path: "/add-book",
    component: AddBook,
    isPublic: true,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
