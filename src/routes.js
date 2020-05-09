import React from 'react'
import {Image, View} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Logo from './assets/header/logomarca.png';

// Páginas
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Galeries from './Pages/Galeries';
import Galery27 from './Pages/Galeries/Galery27';
import Galery28 from './Pages/Galeries/Galery28';
import Galery29 from './Pages/Galeries/Galery29';
import Galery30 from './Pages/Galeries/Galery30';
import Certificado from './Pages/Certificado';
import Localization from './Pages/Localization';
import Programation from './Pages/Programation/';
import Inscricao from './Pages/Inscricao/';
import News from './Pages/News/';
import Detail from './Pages/News/Detail';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NewsScreen = () => (
  <Stack.Navigator initialRouteName={News} screenOptions= {{ headerShown: false}}>
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const GaleriesScreen = () => (
  <Stack.Navigator initialRouteName={Galeries} screenOptions= {{ headerShown: false}}>
    <Stack.Screen name="Galeries" component={Galeries} />
    <Stack.Screen name="Galery27" component={Galery27} />
    <Stack.Screen name="Galery28" component={Galery28} />
    <Stack.Screen name="Galery29" component={Galery29} />
    <Stack.Screen name="Galery30" component={Galery30} />
  </Stack.Navigator>
);


export default function Routes() {
    function CustomDrawerContent(props) {
        return (
                <DrawerContentScrollView {...props}>
                     <Image source={Logo} style={{alignSelf:'center', marginTop: 15, marginBottom: 15}}/>
                     <DrawerItemList {...props} />
                     <DrawerItem label="Help" onPress={() => alert('Link to help')} />
                </DrawerContentScrollView>
        );
      }

    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home" 
                unmountOnBlur="True"
                drawerContent={props => <CustomDrawerContent {...props}/>}
                drawerContentOptions={{
                    activeTintColor: '#fff',
                    activeBackgroundColor: '#D1AE5F',   
                        style:{backgroundColor: '#F9F9F9'}
                }}
                > 
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Notícias" component={NewsScreen} />
                <Drawer.Screen name="Sobre" component={About} />
                <Drawer.Screen name="Contato" component={Contact} />
                <Drawer.Screen name="Galeria" component={GaleriesScreen} />
                <Drawer.Screen name="Certificado" component={Certificado} />
                <Drawer.Screen name="Localização" component={Localization} />
                <Drawer.Screen name="Programação" component={Programation} />
                <Drawer.Screen name="Inscrição" component={Inscricao} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
