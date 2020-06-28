import React from 'react'

import {Text , StyleSheet , View ,ScrollView , Image, Button} from 'react-native'
import {useSelector , useDispatch} from 'react-redux'
import product from '../../store/reducers/product';
import Colors from '../../constants/Colors';
import { addCart } from '../../store/actions/cart';


const ProductDetailScreen = props => {
    const dispatch = useDispatch()
    //const id = props.navigation.getParam('productId') 
    const id = props.route.params['productId'] ; 
    const selectedProduct = useSelector(state => state.products.availableProducts.find(product => product.id === id))
    props.navigation.setOptions({headerTitle : selectedProduct.title })    
return (
    <ScrollView>
        <Image style ={{width : '100%' , height :300}} source={{uri : selectedProduct.imageUrl}} />
        <View style ={styles.section}>
        <Button title='ADD TO CART' onPress = {() => dispatch(addCart(selectedProduct))} color ={Colors.primary} />
             <Text style = {styles.price}>${selectedProduct.price}</Text>

                <Text style = {styles.description} >{selectedProduct.description}</Text>
        </View>
      
    </ScrollView>
)
}

const styles = StyleSheet.create({
    section :{
        alignItems : "center" ,
        paddingVertical : 50 , 
    } ,
    price : {
        fontSize : 20 , 
        color : 'gray' , 
        textAlign : 'center' , 
        marginVertical : 20
    } ,
    description : {
        fontSize : 14 , 
        textAlign : 'center' , 
        fontFamily :'open-sans'
    }
})

export default ProductDetailScreen

