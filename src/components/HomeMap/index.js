import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const HomeMap =()=>{
    return(
        <View style={styles.container}>
        <MapView
        //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 28.589911,
            longitude:77.062897,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    )
}
export default HomeMap;
const styles = StyleSheet.create({
    container: {
    //   ...StyleSheet.absoluteFillObject,
      height: 400,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,

    },
   });