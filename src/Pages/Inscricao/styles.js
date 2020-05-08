import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerInscricao: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#F9F9F9',
    },
    title: {
        alignSelf: 'center',
        marginTop: Constants.statusBarHeight + 30,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#E25822'
    },
    input: {
        marginTop: 30,
        borderWidth: 4.5,
        width: '70%',
        alignSelf: 'center',
        height: 75,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 29,
        fontFamily: 'Roboto',
        backgroundColor: '#fff',
        borderColor: '#E25822',
        color: 'rgba(229, 88, 34, 0.9)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    goBackButton:{
        alignSelf: 'center',
        marginBottom: 20
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }


})