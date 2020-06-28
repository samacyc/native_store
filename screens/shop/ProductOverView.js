import React from 'react'

import {FlatList , Text} from 'react-native'

import {useSelector , useDispatch} from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductItem from '../../component/shop/ProductItem';
import CustomHeaderButton from '../../component/HeaderButton'
import { addCart } from '../../store/actions/cart';

const ProductsOverviewScreen = props => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.availableProducts)
  console.log(products)
  props.navigation.setOptions({ headerLeft : () =><HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
  <Item title = 'Menu' iconName = 'ios-menu' onPress = {() => {
    props.navigation.toggleDrawer()
  }} 
  />
</HeaderButtons> , headerTitle : 'All Products' , headerRight : ()=> <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
  <Item title = 'Cart' iconName = 'ios-cart' onPress = {() => {
    props.navigation.navigate('Cart')
  }} 
  />
</HeaderButtons>  })
return  <FlatList data={products}   keyExtractor={item => item.id}renderItem={({ item }) => <ProductItem onAddToCart ={() => {console.log(item) ,dispatch(addCart(item))}} view = {() => props.navigation.navigate('ProductDetail' , {
  productId : item.id
})} url = {item.imageUrl} price = {item.price} title = {item.title} /> } />
}

export default ProductsOverviewScreen
