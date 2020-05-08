import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerGaleries: {
        flex: 1,
        width:'100%',
        height:'100%',
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
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    images:{
        width: '30%',
        height: 130,
        marginTop: 10
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }
})