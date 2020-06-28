import React , {useState} from 'react';
import { createStore , combineReducers} from 'redux'
import { Provider} from 'react-redux'

import productsReducer from './store/reducers/product'
import ProductNavigator from './navigation/ShopNavigation';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './store/reducers/cart'
import orderReducer from './store/reducers/order'
const LoadFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf') , 
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const roorReducer = combineReducers({
  products : productsReducer , 
  cart : cartReducer , 
  order : orderReducer
})
const store = createStore(roorReducer )

export default function App() {
  const [Loaded , setLoadFont] = useState(false) 
  if(!Loaded) {
    return <AppLoading startAsync={LoadFonts} onFinish ={()=> setLoadFont(true)} />
  }
  return (
    <Provider store = {store} >
   <ProductNavigator />
    </Provider>   
  );
}
