import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductOverView';
import Colors from '../constants/Colors';
import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { hide } from 'expo/build/launch/SplashScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../component/HeaderButton'
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()
const defaultNavOptions = {
    headerStyle : {
        backgroundColor : Colors.primary 
    } , 
    headerTitleStyle : {
        fontFamily : 'open-sans-bold'
    },
    headerTintColor : 'white' ,
    headerTitleAlign : 'center' ,

}
const ProductNavigator = () =><Stack.Navigator >
    <Stack.Screen  name = 'Home' component= {ProductsOverviewScreen}  options = {{...defaultNavOptions }} />
    <Stack.Screen name = 'ProductDetail' component ={ProductDetailScreen} options ={defaultNavOptions}  />
    <Stack.Screen name = 'Cart' component ={CartScreen} options ={defaultNavOptions}  />

    </Stack.Navigator>

const orderNavigator = () => <Stack.Navigator >
<Stack.Screen  name = 'Order' component= {OrderScreen}  options = {{...defaultNavOptions }} />


</Stack.Navigator>
 const Drawer = createDrawerNavigator();

 const myDrawer = () => <NavigationContainer>
     <Drawer.Navigator>
         <Drawer.Screen name = 'Home' children = {ProductNavigator} options ={{...defaultNavOptions , drawerIcon: drawerConfig => (
             <Ionicons name ='ios-cart' size ={23} />
         )}} />


         <Drawer.Screen name = 'order' children ={orderNavigator} options ={{...defaultNavOptions , drawerIcon: drawerConfig => (
             <Ionicons name ='md-list' size ={23} />
         )}} />
     </Drawer.Navigator>
 </NavigationContainer>



export default myDrawer