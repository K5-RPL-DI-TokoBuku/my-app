import { Home, Login, Register, AddBook, Cart, Products, DetailProduct, UpdateBook, Shipment, Profile, Information, Transaksi, Dasboard } from '../pages';

const routes = [
  {
    path: "/dasboard",
    component: Dasboard,
    isPublic: false,
  },
  {
    path: "/transaksi",
    component: Transaksi,
    isPublic: false,
  },
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
    isPublic: false,
  },
  {
    path: "/products",
    component: Products,
    isPublic: false,
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
