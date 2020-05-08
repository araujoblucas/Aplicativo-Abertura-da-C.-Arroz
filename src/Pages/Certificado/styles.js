import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerCertificado: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#F9F9F9'
    },
    descriptionText: {
        color: '#422400',
        width: '85%',
        fontSize: 32,
        fontFamily: 'notoserif',
        textAlign:'center',
        alignSelf: 'center',
        marginTop: -10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    input:{
        marginTop: 30,
        borderColor: '#422400',
        borderWidth: 4.5,
        width: '70%',
        alignSelf: 'center',
        height: 75,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 29,
        fontFamily: 'Roboto',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }

})