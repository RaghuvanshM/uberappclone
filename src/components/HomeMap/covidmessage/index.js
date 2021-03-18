import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if neccery</Text>
      <Text style={styles.text}>
        TWhat is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
        and typesetting industry Lorem Ipsum has been the industry's standard
        dummy text ever since the  1500s when an unknown printer took a galley of
        type and scrambled it to make a type specimen book it has?
      </Text>
      <Text style={styles.learmore}>Travel only if neccery</Text>
    </View>
  );
};
export default CovidMessage;
