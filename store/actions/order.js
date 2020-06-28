import * as actionTypes from './actionTypes'
import Order from '../../models/order'

export const setOrder = (items , amount) => {
    return {
        type : actionTypes.ADD_ORDER, data : {
            items : items , amount : amount
        }
    }
}

