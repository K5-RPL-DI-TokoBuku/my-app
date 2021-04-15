/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  LOGIN: "/auth/login",
  REGISTER_USER: "/auth/register",
  CREATE_PRODUCT: "/product/create",
  GET_PRODUCTS: "/product/all",
  GET_PRODUCT: (id)=>{
    return `/product/${id}`
  },
};
