import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerDetail: {
        flex: 1,
        width:'100%',
        backgroundColor: '#F9F9F9',
    },
    title: {
        width: '90%',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 22,
        color: '#E25822',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    image:{
        width: '100%',
        marginTop: -20,
    },
    description: {
        width: '95%',
        alignSelf: 'center',
        marginLeft: '2%',
        marginBottom: 12,
        lineHeight: 25,
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }
})