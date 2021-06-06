import { Home, Login, Register, AddBook, Cart, Products, DetailProduct, UpdateBook, Shipment, Profile, Information } from '../pages';

const routes = [
  {
    path: "/information",
    component: Information,
    isPublic: true,
  },
  {
    path: "/profile",
    component: Profile,
    isPublic: false,
  },
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
    path: "/cart/shipment",
    component: Shipment,
    isPublic: false,
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
    path: "/update-book/:id",
    component: UpdateBook,
    isPublic: false,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
