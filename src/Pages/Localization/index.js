import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, Linking, TouchableOpacityComponent } from 'react-native';
import MapView from 'react-native-maps';


import Inscrito from '../../Components/Sections/inscrito';
import Inscrições from '../../Components/Sections/inscrições';
import Header from '../../Components/Header';
import Styles from './styles';


import Image30 from '../../assets/galeries/30.jpg';
import Image29 from '../../assets/galeries/29.jpg';
import Image28 from '../../assets/galeries/28.jpg';
import Image27 from '../../assets/galeries/27.jpg';


import backgroundImage from '../../assets/backgroundImage.png';
import { BigButton, BigButtonText, 
    TitleLines, TitleLinesText, TitleBox } from '../../Components/Styled/styles';


export default function Localization() {
    return (
        <ScrollView style={Styles.containerLocalization}>
            <View style={{zIndex: 1}}>
                <Header />

                <TitleBox>
                    <TitleLines> ───</TitleLines>
                    <TitleLinesText> Como chegar </TitleLinesText>
                    <TitleLines>─── </TitleLines>
                </TitleBox>

                <MapView
                    initialRegion={{
                    latitude: -31.803663,
                    longitude: -52.411300,
                    latitudeDelta: 0.0012,
                    longitudeDelta: 0.0011,
                    }}
                    style={Styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton
                />

                <TitleBox style={{marginTop: 45}}>
                    <TitleLines> ── </TitleLines>
                    <View  style={{fontSize: 18, width: '65%'}} >
                    <TitleLinesText style={{fontSize: 18, width: '100%', textAlign: 'center'}}> Distancias até</TitleLinesText>
                    <TitleLinesText style={{fontSize: 18, width: '100%', textAlign: 'center'}} >Capão do Leão/Pelotas (RS) </TitleLinesText>
                    </View>
                    <TitleLines> ── </TitleLines>
                </TitleBox>

                <View style={Styles.table}>
                    
                        <Text style={[Styles.tableText, {borderLeftWidth:0, borderTopWidth: 0}]}>Cidade</Text>
                        <Text style={[Styles.tableText,  {borderTopWidth: 0}]}>Distancia</Text>
                        <Text style={[Styles.tableText,  {borderTopWidth: 0}]}> Cidade</Text>
                        <Text style={[Styles.tableText, {borderRightWidth:0, borderTopWidth: 0}]}>Distancia</Text>                  
                    
                        <Text style={Styles.tableTextLeft}>Uruguaiana</Text>
                        <Text style={Styles.tableText}>565,5km	</Text>
                        <Text style={Styles.tableText}>Alegrete</Text>
                        <Text style={Styles.tableTextRight}>474km</Text>                        
                    
                        <Text style={Styles.tableTextLeft}>Pelotas</Text>
                        <Text style={Styles.tableText}>3,1 km</Text>
                        <Text style={Styles.tableText}>Camaquã</Text>
                        <Text style={Styles.tableTextRight}>138,6km</Text>                        
                    

                    
                        <Text style={Styles.tableTextLeft}>Itaqui</Text>
                        <Text style={Styles.tableText}>661,6km</Text>
                        <Text style={Styles.tableText}>Mostardas</Text>
                        <Text style={Styles.tableTextRight}>225,9km</Text>                        
                    

                    
                        <Text style={Styles.tableTextLeft}>Restinga Seca</Text>
                        <Text style={Styles.tableText}>290,9km</Text>
                        <Text style={Styles.tableText}>Santa Maria</Text>
                        <Text style={Styles.tableTextRight}>295,4km</Text>                        
                    

                    
                        <Text style={Styles.tableTextLeft}>Santa Vitória do Palmar</Text>
                        <Text style={Styles.tableText}>242,6km</Text>
                        <Text style={Styles.tableText}>Cachoeira do Sul</Text>
                        <Text style={Styles.tableTextRight}>293km</Text>                        
                    

                    
                        <Text style={[Styles.tableTextLeft, {borderBottomWidth: 0}]}>Montevideo-UR</Text>
                        <Text style={[Styles.tableTextLeft, {borderBottomWidth: 0}]}>587km</Text>
                        <Text style={[Styles.tableTextLeft, {borderBottomWidth: 0}]}>Buenos Aires-AR</Text>
                        <Text style={[Styles.tableTextLeft, {borderBottomWidth: 0, borderRightWidth: 0}]}>828km</Text>                        
                </View>
                
                <Inscrições />
        
                <Inscrito />

            </View>
            <Image source={backgroundImage} style={Styles.background} />
        </ScrollView>
    )
}