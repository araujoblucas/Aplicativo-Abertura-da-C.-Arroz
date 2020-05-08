
import React, { Component } from 'react';
import { Image, View, ScrollView} from 'react-native';
import {Container, Header, Content, Tab, Tabs,Text } from 'native-base';

import Styles from './styles';
import HeaderComponent from '../../Components/Header';

import backgroundImage from '../../assets/backgroundImage.png';

import Dia1 from './Pages/Dia1';
import Dia2 from './Pages/Dia2';
  
  export default function Programation() {
      return (
        <ScrollView style={Styles.containerProgramation}>
          <Container style={Styles.containerProgramation}>
            <HeaderComponent />

            <Text style={[Styles.title, {marginBottom: 20,}]}>Programação</Text>


              <Tabs tabBarUnderlineStyle={{backgroundColor: '#E25822'}}>
                <Tab  heading="Dia 1"
                tabStyle={{
                backgroundColor: '#F9F9F9',
                                  
                }}
                activeTabStyle={{
                  backgroundColor: '#F9F9F9',
                }}
                textStyle={{
                  color: '#000'
                }}
                activeTextStyle={{
                  color: '#E25822'
                }} 
                >
                  <View style={Styles.container}>          
                      <Dia1 />
                  </View>
                </Tab>

                <Tab 
                  heading="Dia 2" 
                  tabStyle={{
                  backgroundColor: '#F9F9F9',
                                    
                  }}
                  activeTabStyle={{
                    backgroundColor: '#F9F9F9',
                  }}
                  textStyle={{
                    color: '#000',
                  }}
                  activeTextStyle={{
                    color: '#E25822'
                  }} 
                >
                  <View style={Styles.container}>
                      <Dia2 />  
                  </View>
                </Tab>
              </Tabs>
            </Container>
            <Image style={Styles.background} source={backgroundImage} />
          </ScrollView>
  );
}

  