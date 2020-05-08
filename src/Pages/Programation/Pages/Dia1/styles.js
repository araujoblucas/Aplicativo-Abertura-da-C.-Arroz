import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerProgramation: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#F9F9F9'
    },
    title:{
        borderColor: '#E25822',
        color: '#D34711',
        borderWidth: 2,
        alignSelf: 'center',
        fontSize: 32,
        padding:10,
        marginTop: 20,
        
    },
    table: {
        flexDirection: 'row',
        marginLeft: '1%',
        width: '98%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexWrap: 'wrap',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRightWidth: 0,
        borderRightColor: '#F9F9F9',
        borderLeftWidth: 0,
        borderLeftColor: '#F9F9F9',
        
    },
    esquerda:{
        width: '30%',
        height: 70,
        borderWidth: 1,
        borderColor: '#000',
        borderEndColor: '#000',
        textAlign: 'right',
        textAlignVertical: 'top',
        paddingTop: 10,
        paddingRight: 10,
        color: '#777',
        borderLeftWidth: 0,
        borderLeftColor: '#F9F9F9',
        
    }, 
    direita: {
        width: '70%',
        height: 70,
        borderWidth: 1,
        borderColor: '#000',
        textAlignVertical: 'top',
        paddingTop: 10,
        paddingLeft: 10,
        color: '#000',
        borderRightWidth: 0,
        borderRightColor: '#F9F9F9',
        
    }
})