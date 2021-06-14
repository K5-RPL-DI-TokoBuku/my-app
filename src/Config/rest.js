/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  LOGIN: "/auth/login",
  REGISTER_USER: "/auth/register",
  GET_DETAIL_USER: "/auth/userdata",
  UPDATE_ALAMAT: "/auth/user_address",
  GET_CART_USER: "/auth/cart",
  ADD_TO_CART_USER: "/auth/add_to_cart",
  DELETE_FROM_CART_USER: "/auth/delete_from_cart",
  CREATE_PRODUCT: "/product/create",
  GET_PRODUCTS: "/product/all",
  GET_PRODUCT: (id)=>{
    return `/product/${id}`
  },
  POST_CITY_IN_PROVINCE: "/transaction/get_city_in_province",
  CHECK_ONGKIR: "/transaction/check_ongkir",
  BUAT_TRANSAKSI: "/transaction/buat_transaksi"
};