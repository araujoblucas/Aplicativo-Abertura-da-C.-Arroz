import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerLocalization: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#F9F9F9',
    },
    map:{
        width: '90%', 
        height: 300,
        alignSelf: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000'
    },
    table:{
        justifyContent: 'space-between',
        width: '96%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        margin: 10,
    },
    tableText: {
        width: '25%',
        padding: 15,
        height: 68,
        borderWidth: 1,
    },
    tableTextLeft: {
        width: '25%',
        padding: 15,
        height: 68,
        borderWidth: 1,
        borderLeftWidth: 0,
    },
    tableTextRight: {
        width: '25%',
        padding: 15,
        height: 68,
        borderWidth: 1,
        borderRightWidth: 0,
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }
})