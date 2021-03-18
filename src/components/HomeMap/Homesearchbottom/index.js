import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
const HomeSearch = () => {
  return (
    <View>
      <View style={styles.textinput}>
        <Text style={styles.searchtext}>Where to go ?</Text>
        <View style={styles.timeContainer}>
          <Icon
            name="clockcircle"
            color="#8d918e"
            size={25}
            style={{marginLeft: 10}}
          />
          <Text style={{fontSize: 18, marginHorizontal: 10}}>Now</Text>
          <Icon name="caretdown" color="#8d918e" size={25} />
        </View>
      </View>
      <View>
        <View style={styles.bottomrow}>
          <View style={styles.rowcirlcecontainer}>
            <Icon
              name="clockcircle"
              color="white"
              size={25}
              style={{padding:8}}
            />
          </View>
          <Text style={styles.destinationtext}>sping night club</Text>
        </View>
        <View style={styles.bottomrow}>
          <View style={{...styles.rowcirlcecontainer,backgroundColor:'#178399'}}>
            <Icon
              name="home"
              color="white"
              size={25}
              style={{padding:8}}
            />
          </View>
          <Text style={styles.destinationtext}>sping night club</Text>
        </View>
      </View>
    </View>
  );
};
export default HomeSearch;
