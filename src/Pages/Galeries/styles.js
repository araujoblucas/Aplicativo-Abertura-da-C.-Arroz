import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerGaleries: {
        flex: 1,
        width:'100%',
        
        backgroundColor: '#F9F9F9',
    },
    containerLinkEvents: {
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    imagesBox: {
        width: '96%',
        marginLeft: '2%',
        marginTop: 15,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    imageButton:{
        width: 200,
        height: 130,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: '2.5%'
    },
    images:{
        width: 120,
        height: 90,
        marginTop: 10,
        marginLeft: 10,
        
        alignSelf: 'center'
    },
        
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    icon: {
        position: 'absolute',
        right: 5,
        top: Constants.statusBarHeight,
    },
    flatlist:{
        marginLeft: '3%',
        width: '94%',
        height: 'auto'
    }
})