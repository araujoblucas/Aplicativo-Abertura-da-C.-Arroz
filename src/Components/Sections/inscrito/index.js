import React from 'react'
import { View, Text } from 'react-native';

import Styles from './styles';

import { SmallButton, SmallButtonText,
         TitleLines, TitleLinesText, TitleBox } from '../../Styled/styles';

export default function inscrito(){
    return (
        <View>
            <TitleBox>
                <TitleLines> ─── </TitleLines>
                <TitleLinesText> Inscrito ? </TitleLinesText>
                <TitleLines> ─── </TitleLines>
            </TitleBox>

            <Text style={Styles.Text}>
                Se você já está inscrito, saiba mais sobre:
            </Text>

            <View style={Styles.boxButtons}>
                <SmallButton>
                    <SmallButtonText>Alimentação</SmallButtonText>
                </SmallButton>

                <SmallButton>
                    <SmallButtonText>Hospedagem</SmallButtonText>
                </SmallButton>

                <SmallButton>
                    <SmallButtonText>Programação</SmallButtonText>
                </SmallButton>
            </View>    
        </View>
    )}