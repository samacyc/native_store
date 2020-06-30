import {SET_PRODUCT} from './actionTypes'
import Product from '../../models/product'



export const fetchProduct =() => {
    return async dispatch => {
        const response = await fetch('https://sotre-a7d7b.firebaseio.com/products.json')
        const resData = await response.json()
        const availableProduct = []
        for (const key in resData) {
            availableProduct.push(new Product(key , 'u1' , resData[key].title , resData[key].imageUrl , resData[key].description , resData[key].price))
        }
        dispatch({
            type :SET_PRODUCT , 
            products : availableProduct
        })
    }
}