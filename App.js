import React, { Component } from 'react';
import {
  Text,
   View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DestinationSearch from './src/screens/Destinationsearch';
import HomeScreen from './src/screens/HomeScreen';
class App extends Component{
  render(){
    return(
      <View>
     <DestinationSearch />
    
      </View>
    )
  }
}
export default App;