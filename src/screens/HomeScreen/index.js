import React from 'react';
import{
    Text,
    View
} from 'react-native';
import HomeMapComponent from '../../components/HomeMap'
import CovidMessage from '../../components/HomeMap/covidmessage';
import HomeSearch from '../../components/HomeMap/Homesearchbottom';
const HomeScreen =()=>{
    return(
        <View>
           <HomeMapComponent />
           <CovidMessage />
           <HomeSearch />
        </View>
    )
}
export default HomeScreen;