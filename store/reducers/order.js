import { ADD_ORDER } from "../actions/actionTypes"
import Order from "../../models/order"
const initialState = {
    orders : []
}



export default (state = initialState , action) => {

    switch (action.type ){
        case ADD_ORDER : 
        const order = new Order(new Date().toString() , action.data.items , action.data.amount , new Date())
        return {
            ...state , 
            orders : state.orders.concat(order)
        }
        
        default : 
        return state
    }

}