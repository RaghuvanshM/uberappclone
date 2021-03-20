import React from 'react';
import {
    Text,
    View,
    view
} from 'react-native';
import UberTypes from '../../components/HomeMap/ubertypes';
import HomeMapComponent from '../../components/HomeMap'
const SearchResult = () => {
    return (
        <View>
            <HomeMapComponent />
            <UberTypes />
        </View>
    )
}
export default SearchResult;