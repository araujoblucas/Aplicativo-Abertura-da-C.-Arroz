import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerLocalization: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#F9F9F9',
    },
    newsBox: {
        width: '92%',
        marginLeft: '4%',
        flexDirection: 'row',
        marginBottom: 15,
    },
    newsBoxImage: {
        width: '30%',
        height: 100,
    },
    newsBoxText:{ 
        width: '70%',
        marginTop: -10,
        padding: 15,
        textAlign: 'justify'
    },
    background: {
        zIndex: 0,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    }
})