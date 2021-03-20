import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    View,
    TextInput,
    FlatList
} from 'react-native';
import styles from './style';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Mapmyindia from 'mapmyindia-restapi-react-native-beta';
Mapmyindia.setRestApiKey('zdjgknl2e9nzcw8q6rrcrhz1sctwokdn');
Mapmyindia.setClientId(
    '33OkryzDZsL03Z-bBPJgzrb4MUJ2XpZbD9NtqVb90bUpjgubu-ZnRgkKvNRQDXVNJXw1wdt7oZZ-I2yMzeMq9nN4_VVedCvEtYf3Q6ThXUagSDZdLFYRZQ==',
);
Mapmyindia.setClientSecret(
    'lrFxI-iSEg8ndsP7uuuRF9qAvS_LLzvkypAfjTIis5DbPmgmCBpScspI7b3W_icHkUqdfx4tVRUG-de5sT8GlrlBrEYpC2nhemjFVYfsHr7mZXh_i3BZMW6gzZXKC7df',
);
const DestinationSearch = () => {
    const [fromtext, setFromText] = useState('')
    const [suggestedData, setsuggestedData] = useState([])
    const [destinationtext, setDestinationText] = useState('')
    const onchnagetextcalled = (query) => {
        if (query) {
            Mapmyindia.atlas_auto({ query: query }, (response) => {
                if (response.suggestedLocations) {
                    setsuggestedData(response.suggestedLocations)
                }
                else{
                    setsuggestedData([])
                }
            });
        }
        else{
            setsuggestedData([])
        }
    }
    const renderItem = (item) => {
        let { placeAddress } = item.item
        return (
            <Card style={{marginTop:20}}>
                <Title> {placeAddress}</Title>
            </Card>
        )
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinputbox}
                placeholder='from'
                onChangeText={(text) => { onchnagetextcalled(text) }}
            />
            <TextInput
                style={styles.textinputbox}
                placeholder='where to ?'
                onChangeText={(text) => { onchnagetextcalled(text) }}
            />
            <FlatList
                data={suggestedData}
                renderItem={renderItem}

                keyExtractor={(item, index) => String(index)}
            />
        </View>
    )
}
export default DestinationSearch;