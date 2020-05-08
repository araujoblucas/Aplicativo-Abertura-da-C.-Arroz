import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerContact: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#F9F9F9',
    },
    titleText: {
        color: '#422400',
        fontFamily: 'Roboto',
        textAlign: 'center',
        textAlignVertical: 'center',
        textTransform:'uppercase',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20,
    },
    bodyText: {
        color: '#422400',
        fontFamily: 'Roboto',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontStyle: 'italic',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 18,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
        width: 250,
        height: 110
    },
    titleText2: {
        color: '#422400',
        fontFamily: 'Roboto',
        textAlign: 'center',
        textAlignVertical: 'center',
        textTransform:'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    socialBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center'
    },
    socialIcons: {
        width: 50,
        height: 50,
        margin: 5
    },

    phoneBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        marginTop: 20,
        alignSelf: 'center'
    },
    phoneNumberBox: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignSelf: 'center' 
    },
    phoneNumberBoxText: {
        lineHeight: 22,
        fontSize: 22,
        color: '#422400',
        fontFamily: 'Roboto',
        
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }
})