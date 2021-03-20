import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DestinationSearch from './src/screens/Destinationsearch';
import HomeScreen from './src/screens/HomeScreen';
import SearchResult from './src/screens/searchResults';
class App extends Component {
  render() {
    return (
      <View>
        <SearchResult />
      </View>
    )
  }
}
export default App;