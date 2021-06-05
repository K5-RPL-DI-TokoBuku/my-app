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


// Contoh ApI Zomato untuk get data
// https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&sort=rating&count=12