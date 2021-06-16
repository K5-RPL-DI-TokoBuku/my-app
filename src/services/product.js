import BaseService from './baseService';
import API from '../Config/rest';

const createProduct = (data) => {
    const {name, author, category, image_link, price, quantity, description} = data
    return BaseService.post(API.CREATE_PRODUCT, { name, author, category, image_link, price, quantity, description });
};

const getProducts = () => {
    return BaseService.get(API.GET_PRODUCTS)
}

const getProduct = (id) => {
    return BaseService.get(API.GET_PRODUCT(id))
}

const deleteProduct = (id) => {
    return BaseService.delete(API.GET_PRODUCT(id))
}

const updateProduct = (data) => {
    const {_id, name, author, category, image_link, price, quantity, description} = data
    return BaseService.put(API.GET_PRODUCT(_id), {name, author, category, image_link, price, quantity, description})
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}

