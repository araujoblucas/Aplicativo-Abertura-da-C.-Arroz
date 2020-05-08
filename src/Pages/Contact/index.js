import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, Linking, TouchableOpacityComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../Components/Header';
import Styles from './styles';

import Logo from '../../assets/contact/logomarca.png'
import Facebook from '../../assets/contact/facebook.png'
import Instagram from '../../assets/contact/instagram.png'
import Whatsapp from '../../assets/contact/whatsapp.png'
import Phone from '../../assets/contact/phone.png'

import backgroundImage from '../../assets/backgroundImage.png';

import { BigButton, BigButtonText, 
    TitleLines, TitleLinesText, TitleBox } from '../../Components/Styled/styles';


export default function About(){
    let navigation = useNavigation();

    function navigateToLocalizacao(){
        //navigation.navigate('Localizacao');
    }
    
    function linkToInstagram(){
        Linking.openURL(`instagram://user?username=federarroz`);
    }

    function linkToWebsite(){
        Linking.openURL(`http://www.federarroz.com.br/`);
    }

    function linkToFacebook(){
        Linking.openURL("https://www.facebook.com/federarrozrs/");
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5551980654000&text=Olá,%20nos%20conte%20sua%20duvida`);
    }
    function callTo(number) {
        Linking.openURL(`tel:${number}`);
    }
    

    return (
        <ScrollView style={Styles.containerAbout}>
            <View style={{zIndex: 1,}} >
                <Header />

                <TitleBox>
                    <TitleLines > ──── </TitleLines>
                        <TitleLinesText> Contato </TitleLinesText>
                    <TitleLines> ──── </TitleLines>
                </TitleBox>

                <Text style={Styles.titleText}>ESCRITÓRIO PORTO ALEGRE</Text>

                <Text style={Styles.bodyText} >

                    Rua: Riachuelo, 1038 – Sala: 1401 | Porto Alegre – RS 
                </Text><Text style={Styles.bodyText} >
                    Tel:(51)3211-0879 – (51) 980-65-4000
                </Text><Text style={Styles.bodyText} >
                    E-mail: federarroz@federarroz.com.br
                </Text>
                <TouchableOpacity onPress={() => linkToWebsite()}>
                    <Image source={Logo} style={Styles.logo}  />
                </TouchableOpacity>
                <Text style={Styles.titleText2}>Também estamos disponíveis pelo Whatsapp</Text>
                
                <View style={Styles.socialBox}>
                    <TouchableOpacity onPress={() => linkToInstagram()}>
                        <Image source={Instagram} style={Styles.socialIcons} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => sendWhatsapp()}>
                    <Image source={Whatsapp} style={Styles.socialIcons} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => linkToFacebook()}>
                        <Image source={Facebook} style={Styles.socialIcons}  />
                    </TouchableOpacity>
                </View>

                <View style={Styles.phoneBox}>                
                    <Image source={Phone} style={Styles.socialIcons}  />
                    <View style={Styles.phoneNumberBox}>
                        <TouchableOpacity onPress={() => callTo(5551980654000)}>
                            <Text style={Styles.phoneNumberBoxText}>(51) 98065.4000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => callTo(555132110879)}>
                            <Text style={Styles.phoneNumberBoxText}>(51)  3211.0879</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={[Styles.titleText, {fontSize: 28, marginBottom: 20}]}>COMO CHEGAR NO EVENTO</Text>

                <BigButton onPress={navigateToLocalizacao()}>
                    <BigButtonText>
                        Localização
                    </BigButtonText>
                </BigButton>

            </View>
            <Image source={backgroundImage} style={Styles.background} />    

        </ScrollView>
    )
}