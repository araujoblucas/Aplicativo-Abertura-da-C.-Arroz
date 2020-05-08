import React, {useState} from 'react'
import { ScrollView, View, Text, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Styles from './styles';
import backgroundImage from '../../assets/backgroundImage.png';
import goBack from '../../assets/inscricao/vectorGoBack.png'
import { BigButton, BigButtonText } from '../../Components/Styled/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Inscricao() {
    let [Nome, setNome] = useState('');
    let [CPF, setCPF] = useState('');
    let [Whatsapp, setWhatsapp] = useState('');
    let [Email, setEmail] = useState('');
    let [Cidade, setCidade] = useState('');


    let Navigator = useNavigation();


    function navigateGoBack() {
        Navigator.navigate('Home');
    }

    return (
        <ScrollView style={Styles.containerInscricao}>
            <View style={{zIndex: 1}}>
                

                    <Text style={Styles.title}>Faça sua inscrição</Text>

                    <TextInput
                        style={Styles.input}
                        onChangeText={text => setNome(text)}
                        value={Nome}
                        placeholder="Nome"
                        placeholderTextColor="rgba(229, 88, 34, 0.6)"
                    />

                    <TextInput
                        style={Styles.input}
                        onChangeText={text => setCPF(text)}
                        value={CPF}
                        placeholder="CPF"
                        placeholderTextColor="rgba(229, 88, 34, 0.6)"
                    />

                    
                    <TextInput
                        style={Styles.input}
                        onChangeText={text => setWhatsapp(text)}
                        value={Whatsapp}
                        placeholder="Whatsapp"
                        placeholderTextColor="rgba(229, 88, 34, 0.6)"
                    />

                    <TextInput
                        style={Styles.input}
                        onChangeText={text => setEmail(text)}
                        value={Email}
                        placeholder="E-mail"
                        placeholderTextColor="rgba(229, 88, 34, 0.6)"
                    />

                    <TextInput
                        style={Styles.input}
                        onChangeText={text => setCidade(text)}
                        value={Cidade}
                        placeholder="Cidade"
                        placeholderTextColor="rgba(229, 88, 34, 0.6)"
                    />

                <BigButton style={{marginTop: 30, marginBottom: 30,}}>
                    <BigButtonText>Inscrever</BigButtonText>
                </BigButton>

                <TouchableOpacity style={Styles.goBackButton} onPress={() => navigateGoBack()}>
                    <Image source={goBack} />
                </TouchableOpacity>
            </View>
            <Image style={Styles.background} source={backgroundImage} />
        </ScrollView>

    );
}