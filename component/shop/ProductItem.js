import React from 'react'
import {View , Text , StyleSheet , Image, Button , TouchableOpacity} from 'react-native'
import Colors from '../../constants/Colors'




const ProductItem = props => {

    return (
        <TouchableOpacity style = {styles.screen}  onPress ={props.view}>
        <View >
            <View style = {styles.imageContainer}>
            <Image source ={{uri :props.url}} style = {{width : '100%' , height : 200}} />

            </View>
            <View style = {{alignItems : 'center'}}>
            <Text style = {styles.title}>{props.title} </Text>
            <Text style ={styles.price}>${props.price}</Text>
            </View>
            
            <View style ={styles.buttons}>
               <Button onPress ={props.view} color ={Colors.primary} title ='VIEW DETAILS' />
               <Button color ={Colors.primary} onPress={props.onAddToCart}  title ='To Cart' />
            </View>

        </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    screen :{
        shadowColor : 'black' , 
        shadowOpacity : 0.26 , 
        shadowOffset : {width : 0 , height : 2},
        shadowRadius : 8 , 
        elevation : 5 , 
        borderRadius : 10 , 
        backgroundColor : 'white' , 
        height : 300 , 
        margin :20
        },
    imageContainer : {
        width : '100%' ,
        height : '60%'  , 
        borderTopLeftRadius : 10, 
        borderTopRightRadius : 10 , 
        overflow : 'hidden'
    },
    buttons : {
        justifyContent :'space-between' , 
        flexDirection :'row' ,
        paddingHorizontal :35,
        height : '25%' , 
        alignItems : 'center'
    } , 
    title : {
        fontSize :15 ,
        fontFamily : 'open-sans-bold' ,
        fontSize : 22, 
        paddingTop : 4
    } , 
    price : {
        fontStyle :'italic' , 
        color : 'gray'
    }
})
export default ProductItem
