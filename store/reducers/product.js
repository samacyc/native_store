import PRODUCTS from "../../data/dummy-data"
import { SET_PRODUCT } from "../actions/actionTypes"
const initialState = {
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(prod => prod.ownerId)
}  
export default (state = initialState , action) => {
    switch(action.type) {
        case SET_PRODUCT : 
        return {
            availableProducts : action.products  ,
            userProducts : action.products .filter(prod => 'u1')
        }
    }
    return state
}