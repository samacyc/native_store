import Cart from "../../models/cart"
import { ADD_TO_CART , DELETE_TO_CART , ADD_ORDER } from "../actions/actionTypes"

const initialState = {
    items : {} ,
    totalAmount : 0
}



export default (state = initialState , action) => {
    switch (action.type) {
        case ADD_TO_CART :
            const addedProduct = action.Product 
            const price =addedProduct.price 
            const title = addedProduct.title
            
            let updatedCart ;
            if (state.items[addedProduct.id]) {
                updatedCart = new Cart(state.items[addedProduct.id].quantity +1 , 
                 price , title , state.items[addedProduct.id].totalamount + price   )
            }
            else {
                updatedCart = new Cart(1 , price,title , price)
            }
        
            return {
                ...state , 
                items : {...state.items , [addedProduct.id] : updatedCart} , 
                totalAmount : state.totalAmount + price
            }
        case DELETE_TO_CART : 
        updatedCart = state.items
        if(state.items[action.pid].quantity >1)  {
            updatedCart = new Cart(state.items[action.pid].quantity -1 ,state.items[action.pid].price ,
                state.items[action.pid].title ,state.items[action.pid].totalamount - state.items[action.pid].price )
                return {
                    ...state , 
                   items : {...state.items , [action.pid] : updatedCart} ,
                    totalAmount : state.totalAmount - state.items[action.pid].price
                }        
            } 
        else {
          updatedCart = {...state.items}
          delete updatedCart[action.pid]
          return {
            ...state , 
           items : updatedCart ,
            totalAmount : state.totalAmount - state.items[action.pid].price
        }   

        }
        case ADD_ORDER : 
        return initialState
       
        default : 
            return state
    }
}