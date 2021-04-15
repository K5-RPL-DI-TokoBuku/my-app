import { Home, Login, Register, AddBook, Cart, Products, DetailProduct } from '../pages';

const routes = [
  {
    path: "/products/:id",
    component: DetailProduct,
    isPublic: true,
  },
  {
    path: "/products",
    component: Products,
    isPublic: true,
  },
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
    isPublic: false,
  },
  {
    path: "/add-book",
    component: AddBook,
    isPublic: false,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
