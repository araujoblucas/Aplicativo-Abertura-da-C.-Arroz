import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import Header from '../../Components/Header';
import Styles from './styles';

import NewsImage1 from '../../assets/news/1.png';
import NewsImage2 from '../../assets/news/2.png';
import NewsImage3 from '../../assets/news/3.png';
import NewsImage4 from '../../assets/news/4.png';

import backgroundImage from '../../assets/backgroundImage.png';
import { TitleLines, TitleLinesText, TitleBox } from '../../Components/Styled/styles';

export default function News() {
    let Navigator = useNavigation();

    function navigateToDetail(){
        Navigator.navigate('Detail');
    }
    return (
        <ScrollView>
            <View  style={{zIndex: 1}}>
                <Header />

                <TitleBox>
                    <TitleLines> ────   </TitleLines>
                    <TitleLinesText>Notícias</TitleLinesText>
                    <TitleLines>   ──── </TitleLines>
                </TitleBox>

                <TouchableOpacity onPress={() => navigateToDetail()}>
                    <View style={Styles.newsBox} >
                        <Image source={NewsImage1} style={Styles.newsBoxImage} />
                        <Text style={Styles.newsBoxText}>
                            ONG ARRECADA MAIS DE R$ 7 MIL COM ESTACIONAMENTO NA ABERTURA OFICIAL DA COLHEITA DO ARROZ
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={Styles.newsBox}>
                        <Image source={NewsImage2} style={Styles.newsBoxImage} />
                        <Text style={Styles.newsBoxText}>
                            ANUNCIADO NA ABERTURA DA COLHEITA DO ARROZ TERMINAL PARA EXPORTAÇÃO DO GRÃO EM RIO GRANDE
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={Styles.newsBox}>
                        <Image source={NewsImage3} style={Styles.newsBoxImage} />
                        <Text style={Styles.newsBoxText}>
                            BIOECONOMIA É TEMA DE PALESTRA NO ESTANDE DA EMBRAPA NA ABERTURA OFICIAL DA COLHEITA DO ARROZ
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={Styles.newsBox}>
                        <Image source={NewsImage4} style={Styles.newsBoxImage} />
                        <Text style={Styles.newsBoxText}>
                            EMOÇÃO MARCA A NOITE DE HOMENAGENS NA ABERTURA OFICIAL DA COLHEITA DO ARROZ
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
            <Image style={Styles.background} source={backgroundImage} />
        </ScrollView>
    )}