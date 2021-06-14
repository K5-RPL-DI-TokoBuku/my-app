import BaseService from './baseService';
import API from '../Config/rest';

const registerUser = (data) => {
    const {name, email, nik, password} = data
    return BaseService.post(API.REGISTER_USER, { name, email, nik, password });
}

const loginUser = (data) => {
    const {email, password} = data
    return BaseService.post(API.LOGIN, {email, password});
}

const getDetailUser = () => {
    return BaseService.get(API.GET_DETAIL_USER)
}

const getCartUser = () => {
    return BaseService.get(API.GET_CART_USER)
}

const addToCartUser = (data) => {
    const {name, author, category, image_link, price, quantity, description} = data
    return BaseService.put(API.ADD_TO_CART_USER, {name, author, category, image_link, price, quantity, description});
}

const deleteFromCartUser = (id) => {
    return BaseService.put(API.DELETE_FROM_CART_USER, {'id_product':id})
}

const updateAlamat = (data) => {
    const {label_alamat ,nomor_telepon ,kota_kecamatan ,kode_pos ,alamat, kabupaten, provinsi }  = data
    return BaseService.put(API.UPDATE_ALAMAT, {label_alamat,nomor_telepon,kota_kecamatan,kode_pos,alamat,kabupaten, provinsi})
}

const postCityInProvince = (province) => {
    return BaseService.post(API.POST_CITY_IN_PROVINCE, {province}) 
}

const checkOngkir = (data) => {
    const {destination, weight, courier} = data
    console.log('fetch Api iklas', data)
    return BaseService.post(API.CHECK_ONGKIR,{destination, weight, courier})
}

const buatTransaksi = (data) => {
    const {userData,
        products,
        courier,
        ongkir,
        pembayaran, total_pembayaran} = data

    return BaseService.post(API.BUAT_TRANSAKSI,{userData,
        products,
        courier,
        ongkir,
        pembayaran, total_pembayaran})
}


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    registerUser,
    loginUser,
    getCartUser,
    addToCartUser,
    deleteFromCartUser,
    getDetailUser,
    updateAlamat,
    postCityInProvince,
    checkOngkir,
    buatTransaksi
}