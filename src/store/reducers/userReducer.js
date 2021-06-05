const initialState = {
    userData: {},
    userCart : []
};

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case "UPDATE_USER_DATA":
            const userData = action.payload.userData
            return {...state, userData}
        case "UPDATE_USER_CART":
            const userCart = action.payload.cart
            return {...state, userCart: userCart}
        default:
            return state;
    }
}

export default userReducer;