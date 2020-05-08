
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions} from '@react-navigation/native';

import Styles from './styles';

import Logo from '../../assets/header/logomarca.png';
import VectorVolta from '../../assets/header/vector_volta.png';
import VectorMenu from '../../assets/header/vector_menu.png';




export default function Header() {
    const Navigator =  useNavigation();

    function NavigateBack(){
        Navigator.navigate('Home');
    }

    return (
    <View style={Styles.header}>
        <TouchableOpacity onPress={() => NavigateBack()} style={Styles.botaoVolta} >
            <Image source={VectorVolta} />
        </TouchableOpacity>

        <Image source={Logo} style={Styles.logo} />

        <TouchableOpacity style={Styles.botaoMenu} onPress={() => Navigator.dispatch(DrawerActions.openDrawer())}> 
            <Image source={VectorMenu}  />
        </TouchableOpacity>
    </View>
    )}