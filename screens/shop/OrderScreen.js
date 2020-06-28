import React  from 'react'
import {View , Text} from 'react-native'
import {useSelector} from 'react-redux'

const OrderScreen = props => {
    const Price = useSelector(state => state.cart.totalAmount)
    return (<View>
           <Text>
               {Price}
           </Text>
       </View>
    )
}

export default OrderScreen