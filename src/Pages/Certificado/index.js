import React, {useState} from 'react'
import { ScrollView, TextInput, Text, Image, View} from 'react-native';


import Header from '../../Components/Header';
import Styles from './styles';


import backgroundImage from '../../assets/backgroundImage.png';
import { BigButton, BigButtonText, 
    TitleLines, TitleLinesText, TitleBox } from '../../Components/Styled/styles';


export default function Certificado() {
    let [fullName, setFullName] = useState('');
    let [CPF, setCPF] = useState('');
    let [Email, setEmail] = useState('');

    return (
        <ScrollView style={Styles.containerCertificado}>
            <View style={{zIndex: 1,}}>
            <Header />
            <TitleBox>
                <TitleLines> ──── </TitleLines>
                <TitleLinesText style={{fontFamily: 'Roboto', fontWeight: '100',}}>Certificado</TitleLinesText>
                <TitleLines> ──── </TitleLines>
            </TitleBox>

            <Text style={Styles.descriptionText}>
                Se você é estudante e quer o certificado, insira os dados a seguir e confirme para receber na entrada do evento
            </Text>


            <TextInput
                  style={[Styles.input, {marginTop: 50}]}
                  onChangeText={text => setFullName(text)}
                  value={fullName}
                  placeholder="Nome Completo"
                  placeholderTextColor="#533511"
             />
             
             <TextInput
                  style={Styles.input}
                  onChangeText={text => setCPF(text)}
                  value={CPF}
                  placeholder="CPF"
                  placeholderTextColor="#533511"
             />

            <TextInput
                  style={Styles.input}
                  onChangeText={text => setEmail(text)}
                  value={Email}
                  placeholder="E-mail"
                  placeholderTextColor="#533511"
             />

            <BigButton style={{ marginTop: 40, marginBottom: 40, backgroundColor: '#422400'}}>
                <BigButtonText>Solicitar</BigButtonText>
            </BigButton>

        </View>
        <Image source={backgroundImage} style={Styles.background} />    

        </ScrollView>


    );
}