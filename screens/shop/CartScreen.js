import React from 'react'

import {Text, View, Button , StyleSheet , FlatList} from 'react-native'
import Colors from '../../constants/Colors'
import {useSelector} from 'react-redux'
import { color } from 'react-native-reanimated'
import CartItem from '../../component/shop/CartItem'
import {useDispatch} from 'react-redux'
import { deleteCart } from '../../store/actions/cart'
import { setOrder } from '../../store/actions/order'

const CartScreen = (props) => {
    const dispatch = useDispatch()
    const price = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => {
        const cartitem =[]
        for (key in state.cart.items) {
            cartitem.push({
                productId : key , 
                quantity : state.cart.items[key].quantity , 
                price : state.cart.items[key].price , 
                title : state.cart.items[key].title , 
                totalAmount : state.cart.items[key].totalamount

            })
        }
        return cartitem
    })
    return <View style ={styles.screen}>
           <View style = {styles.box}>
               <View style= {{justifyContent :'flex-start' , flexDirection :'row' , alignItems : 'center'}}>
               <Text style={{fontFamily : 'open-sans-bold' , fontSize : 22}}> Total:</Text>
                <Text style={{fontFamily : 'open-sans-bold' , fontSize : 22 , color : Colors.primary}} > $ {price.toFixed(2)} </Text>
               </View>
        <Button color={Colors.primary} onPress ={()=>dispatch(setOrder(cartItems , price))} disabled ={cartItems.length === 0}  title ="Order Now" />
    </View>
    <View>
    <FlatList data ={cartItems} keyExtractor ={(itemData) => itemData.productId}
     renderItem ={(itemData) => <CartItem quantity = {itemData.item.quantity} title ={itemData.item.title} amount = {itemData.item.totalAmount} onRemove ={()=> dispatch(deleteCart(itemData.item.productId))} /> } />
    </View>
    </View>
  
}

const styles = StyleSheet.create({
    screen : {
        flex : 1, 
    },
    box : {
        flexDirection :'row' ,
        padding : 20,
        margin : 10 ,
        justifyContent : 'space-between' , 
        backgroundColor :'white' ,
        shadowColor : 'black' , 
        shadowOpacity : 0.26 , 
        shadowOffset : {width : 0 , height : 2},
        shadowRadius : 8 , 
        elevation : 5 , 
        borderRadius : 10 , 
        backgroundColor : 'white' , 
        alignItems : 'center' , 
        height :50
    }
})
export default CartScreen