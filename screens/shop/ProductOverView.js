import React , {useEffect , useState} from 'react'

import {FlatList , Text, View , ActivityIndicator} from 'react-native'

import {useSelector , useDispatch} from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductItem from '../../component/shop/ProductItem';
import CustomHeaderButton from '../../component/HeaderButton'
import { addCart } from '../../store/actions/cart';
import { fetchProduct } from '../../store/actions/product';
import Colors from '../../constants/Colors';


const ProductsOverviewScreen = props => {
  const [Loading , setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=> {
    const  loading = async  () => {
     await dispatch(fetchProduct())
      setLoading(false)
    }
    loading()
  } , [dispatch ,setLoading])
  const products = useSelector(state => state.products.availableProducts)
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
if (Loading) {
  return(<View style ={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
    <ActivityIndicator size ='large' color = {Colors.primary} />
  </View>)
}
return  <FlatList data={products}   keyExtractor={item => item.id}renderItem={({ item }) => <ProductItem onAddToCart ={() => {dispatch(addCart(item))}} view = {() => props.navigation.navigate('ProductDetail' , {
  productId : item.id
})} url = {item.imageUrl} price = {item.price} title = {item.title} /> } />
}

export default ProductsOverviewScreen
