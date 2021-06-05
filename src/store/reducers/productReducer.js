const initialState = {
    products: []
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_PRODUCTS_LIST":
            const products = action.payload.products
            return {...state, products}
        default:
            return state;
    }
}

export default productReducer;