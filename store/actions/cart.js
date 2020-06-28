import * as actionTypes from './actionTypes'
export const addCart = (product) => {
    return {
        type : actionTypes.ADD_TO_CART, Product : product
    }
}

export const deleteCart = (pid) => {
    return  {
        type : actionTypes.DELETE_TO_CART , pid : pid
    }
}