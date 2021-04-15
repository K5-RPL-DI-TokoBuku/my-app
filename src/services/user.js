import BaseService from './baseService';
import API from '../Config/rest';

const registerUser = (data) => {
    const {name, email, nik, password} = data
    return BaseService.post(API.REGISTER_USER, { name, email, nik, password });
};

const loginUser = (data) => {
    const {email, password} = data
    return BaseService.post(API.LOGIN, {email, password});
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    registerUser,
    loginUser
}