import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native';

import Header from '../../Components/Header';
import Inscrito from '../../Components/Sections/inscrito';
import Inscrições from '../../Components/Sections/inscrições';
import Styles from './styles';

import { BigButton, BigButtonText, 
        SmallButton, SmallButtonText,
        TitleLines, TitleLinesText, TitleBox } from '../../Components/Styled/styles';

import backgroundImage from '../../assets/backgroundImage.png';


export default function About(){
    return (
        <ScrollView style={Styles.containerAbout}>
            <View style={{zIndex: 1}}>
                
                <Header />

                <TitleBox>
                    <TitleLines> ───── </TitleLines>
                    <TitleLinesText> Evento </TitleLinesText>
                    <TitleLines> ───── </TitleLines>
                </TitleBox>
            
                <Text style={Styles.aboutBodyText}>
                    A realização da 30ª Abertura Oficial da Colheita do Arroz possui o objetivo de desenvolver o setor orizícola, reunindo produtores, autoridades, entidades e empresas do agronegócio do arroz com a finalidade de mostrar a campo, os últimos avanços científicos e tecnológicos na cultura do arroz, bem como discutir a realidade sócio-econômica do setor em nível nacional e internacional.
                </Text>
                <Text style={Styles.aboutBodyText}>
                    Inscrições Gratuitas – na entrada do evento
                </Text>
                <Text style={Styles.aboutBodyText}>
                    Realização: Federarroz – Federação das Associações de Arrozeiros do Rio Grande do Sul
                </Text>

                <TitleBox>
                    <TitleLines> ──── </TitleLines>
                    <TitleLinesText> Galeria </TitleLinesText>
                    <TitleLines> ──── </TitleLines>
                </TitleBox>

                <Text style={Styles.galeryBodyText}>
                    Confira nossa galeria de fotos
                </Text>
            
                <BigButton>
                    <BigButtonText>Galeria</BigButtonText>
                </BigButton>

                <Inscrições />

                <Inscrito />
                
            </View>
            <Image source={backgroundImage} style={Styles.background} />    
        </ScrollView>
    )
}