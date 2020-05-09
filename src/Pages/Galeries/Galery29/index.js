import React, { useState } from "react";
import Lightbox from 'react-native-lightbox';

import { FlatList, Image, TouchableHighlight, View, ScrollView, Text} from "react-native";
import Header from '../../../Components/HeaderStack';
import backgroundImage from '../../../assets/backgroundImage.png';

import { TitleLines, TitleLinesText, TitleBox } from '../../../Components/Styled/styles';

import Image1 from '../../../assets/galeries/29/1.jpg';
import Image2 from '../../../assets/galeries/29/2.jpg';
import Image3 from '../../../assets/galeries/29/3.jpg';
import Image4 from '../../../assets/galeries/29/4.jpg';

import Styles from './styles';
export default function Galery29() {
  const images = [
    {
        source: Image1,
        id: '1',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image2,
        id: '2',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image3,
        id: '3',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image4,
        id: '4',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image1,
        id: '5',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image2,
        id: '6',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image3,
        id: '7',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image4,
        id: '8',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image1,
        id: '9',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image2,
        id: '10',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image3,
        id: '11',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image4,
        id: '12',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image1,
        id: '13',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image2,
        id: '14',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image3,
        id: '15',
        dimensions: { width: 1920, height: 1080 }
    },
    {
        source: Image4,
        id: '16',
        dimensions: { width: 1920, height: 1080 }
    },
 
]

  function setModalVisibleF(visibi, idImage) {
      setModalVisible(visibi);
      setIdImage(idImage);
  }

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{flex: 1}}>
        <TitleBox style={{marginTop: 25}}>
            <TitleLines> ─── </TitleLines>
            <View  style={{fontSize: 18, width: '55%'}} >
                <TitleLinesText style={{fontSize: 20, width: '100%', textAlign: 'center'}}> 29º Abertura da</TitleLinesText>
                <TitleLinesText style={{fontSize: 20, width: '100%', textAlign: 'center'}} >Colheita do Arroz </TitleLinesText>
            </View>
            <TitleLines> ─── </TitleLines>
        </TitleBox>

        <FlatList
            numColumns={3}
            data={images}
            style={Styles.flatlist}

            renderItem={({item})=>(
            
            <Lightbox springConfig={{tension: 100, friction: 100}} activeProps={{height: 250, width: '100%'}}>
                <Image resizeMode="contain" source={item.source}  style={Styles.images} />
            </Lightbox>    
                
        )}
        keyExtractor={item => item.id}
        />
        
      </View>
            
    </View>
  );
};