import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerAbout: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#F9F9F9'
    },

    
    aboutBodyText: {
        margin:25,
        marginTop:0,
        textAlign: 'justify',
        fontSize: 16,
        fontFamily: 'normal',
        lineHeight: 22,
    },
    galeryBodyText: {
        margin:25,
        marginTop:-10,
        textAlign: 'center',
        fontSize: 28,
        fontWeight:'400',
        fontFamily: 'sans-serif-condensed',
    },

    boxButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }
    
})