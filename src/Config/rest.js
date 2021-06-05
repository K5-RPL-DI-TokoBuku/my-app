/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  LOGIN: "/auth/login",
  REGISTER_USER: "/auth/register",
  GET_CART_USER: "/auth/cart",
  ADD_TO_CART_USER: "/auth/add_to_cart",
  DELETE_FROM_CART_USER: "/auth/delete_from_cart",
  CREATE_PRODUCT: "/product/create",
  GET_PRODUCTS: "/product/all",
  GET_PRODUCT: (id)=>{
    return `/product/${id}`
  }
};
