import React from 'react'

import {  HeaderButton } from "react-navigation-header-buttons";
import {Platform} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../constants/Colors';

import {View ,Image} from 'react-native'


const LeftButton = props => {
    return <HeaderButton {...props} IconComponent = {Ionicons} iconSize ={23} color = { Platform.OS === 'android' ? 'white' : Colors.primary} />   
    

}


export default LeftButton


/*<View style ={{justifyContent : 'center' , flexDirection :'row'}}>
        <HeaderButton title = 'Menu' iconName = "ios-search-outline" IconComponent = {Ionicons} iconSize ={23} color = { Platform.OS === 'android' ? 'white' : Colors.primary} />
        <HeaderButton title = 'Menu' iconName = "ios-notifications-outline" IconComponent = {Ionicons} iconSize ={23} color = { Platform.OS === 'android' ? 'white' : Colors.primary} />
        <HeaderButton title = 'Menu' iconName = "ios-text-outline" IconComponent = {Ionicons} iconSize ={23} color = { Platform.OS === 'android' ? 'white' : Colors.primary} />

</View> ;*/