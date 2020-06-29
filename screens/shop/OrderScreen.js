import React  from 'react'
import {View , Text , FlatList} from 'react-native'
import {useSelector} from 'react-redux'
import OrderItem from '../../component/shop/OrderItem'


const OrderScreen = props => {
    const Price = useSelector(state => state.order.orders)
    console.log(Price)
    return (<View>
           <FlatList data ={Price} keyExtractor = {(itemData) => itemData.id} renderItem ={(itemData) =><OrderItem amount ={itemData.item.amount} items ={itemData.item.items} date = {itemData.item.date} />} />
       </View>
    )
}

export default OrderScreen