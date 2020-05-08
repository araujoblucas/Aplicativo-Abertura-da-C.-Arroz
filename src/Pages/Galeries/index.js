import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, Linking, TouchableOpacityComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../Components/Header';
import Styles from './styles';
import backgroundImage from '../../assets/backgroundImage.png';



import Image30 from '../../assets/galeries/30.jpg';
import Image29 from '../../assets/galeries/29.jpg';
import Image28 from '../../assets/galeries/28.jpg';
import Image27 from '../../assets/galeries/27.jpg';

import { BigButton, BigButtonText, 
    TitleLines, TitleLinesText, TitleBox } from '../../Components/Styled/styles';


export default function Galeries() {
    let navigator = useNavigation();

    function navigateTo27(){
        navigator.navigate('Galery27');
    }
    function navigateTo28(){
        navigator.navigate('Galery28');
    }
    function navigateTo29(){
        navigator.navigate('Galery29');
    }
    function navigateTo30(){
        navigator.navigate('Galery30');
    }
    return (
        <ScrollView style={Styles.containerGaleries}>
            <View style={{zIndex: 1}}>

                <Header />

                <TitleBox>
                    <TitleLines> ─────   </TitleLines>
                    <TitleLinesText>Fotos</TitleLinesText>
                    <TitleLines>   ───── </TitleLines>
                </TitleBox>

                <View style={Styles.containerLinkEvents}>
                    <TouchableOpacity onPress={() => navigateTo30()}>
                        <Image style={Styles.imagens} source={Image30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateTo29()}>
                        <Image style={Styles.imagens} source={Image29} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateTo28()}>
                        <Image style={Styles.imagens} source={Image28} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateTo27()}>
                        <Image style={Styles.imagens} source={Image27} />
                    </TouchableOpacity>
                    
                </View>
            </View>
            <Image style={Styles.background} source={backgroundImage} />
        </ScrollView>
    );
}