import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerHome:{
        backgroundColor: "#9FC7E0",
        
    },

    homeLogo: {
        width: "100%",
        height: 324,
        alignSelf: 'center',
        margin: Constants.statusBarHeight + 15,
    },
    containerButtons: {
        zIndex: 1,
        marginTop: 5,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: 287,
        height: 350,
        alignSelf: 'center',
        alignContent: 'space-between',
        marginBottom: 50,
    },
    button: {
        width: 89,
        height: 71,
        
        backgroundColor: '#FFFFFF',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    buttonText: {
        color:'#D1AE5F',
        marginTop: 5,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 12,
        textAlign: 'center',
        
    },

    footer: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 160,
    },
})