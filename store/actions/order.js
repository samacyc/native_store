import * as actionTypes from './actionTypes'
import Order from '../../models/order'

export const setOrder = (items , amount) => {
    return async dispatch => {
        const response = await fetch('https://sotre-a7d7b.firebaseio.com/orders/u1.json' , {
            method : 'POST' , 
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                items , 
                amount, 
                date : new Date().toISOString()
            })

        })
        const resData = await response.json()
        console.log(resData['name'])
        dispatch({
            type : actionTypes.ADD_ORDER , 
            data : {id : resData['name'] , items : items , amount : amount}
        })
    }
   
}

export const fetchOrders = () => {
    return async dispatch => {
        const response = await fetch('https://sotre-a7d7b.firebaseio.com/orders/u1.json')
        const resData = await response.json()
        const orders = [] 
        for (const key in resData) {
            orders.push( new Order( key , resData[key].items , resData[key].amount , resData[key].date))
        }
        dispatch({
            type : actionTypes.FETCH_ORDERS , 
            data : orders
        })
    }
    
}