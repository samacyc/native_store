import { ADD_ORDER, FETCH_ORDERS } from "../actions/actionTypes"
import Order from "../../models/order"
const initialState = {
    orders : []
}



export default (state = initialState , action) => {

    switch (action.type ){
        case ADD_ORDER : 
        const order = new Order(action.data.id , action.data.items , action.data.amount , action.data.date)
        return {
            ...state , 
            orders : state.orders.concat(order)
        }
        case FETCH_ORDERS : 
        return {
            ...state , 
            orders : action.data
        }
        
        default : 
        return state
    }

}