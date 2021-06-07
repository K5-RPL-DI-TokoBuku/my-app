import { productService, userService } from '../../services';

// Fetch Data, kemudian masukkan ke store
// Parameter di get state masih bingung penggunaan nya? Digunakan jika ingin mengakses state yg ada di store
// Kare sifat redux itu immutable, jadi untuk merubah data harus mendefinisi data baru

export function getProducts() {
    return (dispatch, getState) => {
        productService
            .getProducts()
            .then(res => {
                console.log(res.products)
                dispatch({
                    type: "UPDATE_PRODUCTS_LIST",
                    payload: {
                        'products': res.products
                    }
                })
            })
            .catch(err => console.log(err))
            .finally(()=> console.log('Fetch api To get data products'))
    }
}

export function getUserCart() {
    return (dispatch, getState) => {
        userService
            .getCartUser()
            .then(res=>{
                dispatch({
                    type: "UPDATE_USER_CART",
                    payload: {
                        'cart': res.cart
                    }
                })
            })
            .catch((err) => console.log(err))
            .finally(()=> console.log('Fetch Api to Get User Cart'))
    }
}

export function getUserData() {
    return (dispatch, getState) => {
        userService
            .getDetailUser()
            .then(res=>{
                dispatch({
                    type: "UPDATE_USER_DATA",
                    payload: {
                        userData: res.dataUser
                    }
                })
            })
            .catch((err) => console.log(err))
            .finally(()=> console.log('Fetch Api to Get User Detail'))
    }
}

export function updateAlamatPengiriman(newAlamat) {
    return (dispatch, getState) => {
        userService
            .updateAlamat(newAlamat)
            .then(res=>{
                console.log('action 64')
                console.log(res)
                console.log('action 64')

                dispatch({
                    type: "UPDATE_USER_DATA",
                    payload: {
                        userData: res.new_userData
                    }
                })
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                console.log('Update Alamat pengiriman')
            })
    }
}

export function addToCartUser(new_data_product){
    return (dispatch, getState) => {
        userService
            .addToCartUser(new_data_product)
            .then(res => {
                console.log("from action :\n", res.cart)
                dispatch({
                    type: "UPDATE_USER_CART",
                    payload: {
                        'cart': res.result.cart
                    }
                })
            })
            .catch(err => {
                // setMessage('Failed add product to cart')
                console.log(err)
                console.log('Failed add product to cart')
            })
            .finally(()=> {
                console.log('Fetch api to add product to cart')
            })
       
    }
}


// Contoh ApI Zomato untuk get data
// https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&sort=rating&count=12