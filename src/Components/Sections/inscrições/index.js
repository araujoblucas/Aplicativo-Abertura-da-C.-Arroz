import React from 'react'
import { View, Text, } from 'react-native';

import Styles from './styles';

import { BigButton, BigButtonText, 
        TitleLines, TitleLinesText, TitleBox } from '../../Styled/styles';
export default function inscrições(){
    return (
        <View>
            <TitleBox>
                <TitleLines> ─── </TitleLines>
                <TitleLinesText> Inscrições </TitleLinesText>
                <TitleLines> ─── </TitleLines>
            </TitleBox>

            <Text style={Styles.Text}>
                Se você ainda não efetuou sua inscrição
                não perca tempo, faça agora mesmo, é gratuita
            </Text>

            <BigButton>
                <BigButtonText>Fazer Inscrição</BigButtonText>
            </BigButton>
        </View>
    )
}