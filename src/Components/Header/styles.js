import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({

header:{
    height: Constants.statusBarHeight + 70,
    width: '100%',
    backgroundColor: '#9FC7E0',
    borderBottomColor: '#D1AE5F',
    borderBottomWidth: 5,
    alignItems: 'center',
    
      
},
botaoMenu: {
    position: 'absolute',
    right: 15,
    marginTop: Constants.statusBarHeight + 22,
},
botaoVolta: {
    position:'absolute',
    marginTop: Constants.statusBarHeight + 22,
    left: 15,
},
logo: {
    marginTop: Constants.statusBarHeight + 15,
    justifyContent: 'center',
}
})