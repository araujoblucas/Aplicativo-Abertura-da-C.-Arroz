import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Styles from './styles';


import IconInscricao from '../../assets/icons/vector_inscricao.png';
import IconProgramacao from '../../assets/icons/vector_programacao.png';
import IconVitrine from '../../assets/icons/vector_vitrine.png';
import IconCertificado from '../../assets/icons/vector_certificado.png';
import IconNoticias from '../../assets/icons/vector_noticias.png';
import IconLocalizacao from '../../assets/icons/vector_localizacao.png';
import IconAlimentacao from '../../assets/icons/vector_alimentacao.png';
import IconGaleria from '../../assets/icons/vector_galeria.png';
import IconSobre from '../../assets/icons/vector_sobre.png';
import IconContato from '../../assets/icons/vector_contato.png';
import IconHospedagem from '../../assets/icons/vector_hospedagem.png';
import IconCaravana from '../../assets/icons/vector_caravana.png';

import HomeLogo from '../../assets/splash.png';
import FooterImg from '../../assets/footerHome.png';



export default function Home(){
    let Navigator = useNavigation();

    function NavigationToAbout() {
        Navigator.navigate('Sobre');
    }
    function NavigationToContact() {
        Navigator.navigate('Contato');
    }
    function NavigationToGaleries() {
        Navigator.navigate('Galeria');
    }
    function NavigationToLocalization() {
        Navigator.navigate('Localização');
    }
    function NavigationToCertificado() {
        Navigator.navigate('Certificado');
    }
    function NavigationToProgramation() {
        Navigator.navigate('Programação');
    }
    function NavigationToInscricao() {
        Navigator.navigate('Inscrição');
    }
    
    return (
        <ScrollView style={Styles.containerHome}>
            <Image source={HomeLogo} style={Styles.homeLogo} />
            
            <View style={Styles.containerButtons}>
                <TouchableOpacity style={[Styles.button, {marginLeft: 0}]} onPress={() => NavigationToInscricao()}>
                    <Image source={IconInscricao} />
                    <Text style={Styles.buttonText}>Inscrição</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[Styles.button, {marginLeft: 0}]} onPress={() => NavigationToProgramation()}>
                    <Image source={IconProgramacao} /> 
                    <Text style={Styles.buttonText}>Programação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Styles.button, {marginLeft: 0}]}>
                    <Image source={IconVitrine} /> 
                    <Text style={Styles.buttonText}>Vitrine</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Styles.button, {marginLeft: 0}]} onPress={() => NavigationToCertificado()}>
                    <Image source={IconCertificado} />
                    <Text style={Styles.buttonText}>Certificado</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button}>
                <Image source={IconNoticias} /> 
                    <Text style={Styles.buttonText}>Notícias</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button} onPress={() => NavigationToLocalization()}>
                    <Image source={IconLocalizacao} />
                    <Text style={Styles.buttonText}>Localização</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button}>
                    <Image source={IconAlimentacao} />
                    <Text style={Styles.buttonText}>Alimentação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button} onPress={() => NavigationToGaleries()}>
                    <Image source={IconGaleria} />
                    <Text style={Styles.buttonText}>Galeria de Fotos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button} onPress={() => NavigationToAbout()}>
                    <Image source={IconSobre} />
                    <Text style={Styles.buttonText}>Sobre</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={Styles.button} onPress={() => NavigationToContact()}>
                    <Image source={IconContato} />
                    <Text style={Styles.buttonText}>Contato</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button}>
                    <Image source={IconHospedagem} />
                    <Text style={Styles.buttonText}>Hospedagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button}>
                    <Image source={IconCaravana} />
                    <Text style={Styles.buttonText}>Caravanas</Text>
                </TouchableOpacity>
            </View>
            <Image source={FooterImg} style={Styles.footer} />    
        </ScrollView>
        
        
            
    );
}