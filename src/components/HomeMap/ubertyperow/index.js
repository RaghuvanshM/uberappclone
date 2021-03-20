import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from './style'
import Ionicons from "react-native-vector-icons/Ionicons";
const UberTypeRow = (props) => {

    const getImages = () => {
        if (props.type.type === 'UberX') {
            return require('../../../assests/UberAssets/UberAssets/images/UberX.jpeg')

        }
        if (props.type.type === 'Comfort') {
            return require('../../../assests/UberAssets/UberAssets/images/Comfort.jpeg')
        }
        if (props.type.type === 'UberXL') {
            return require('../../../assests/UberAssets/UberAssets/images/Comfort.jpeg')
        }
    }
    return (
        <View style={styles.conatiner}>
            {/**** image  */}
            <Image
                source={getImages()}
                style={styles.carimage}
            />
            <View style={styles.middlecontainer}>
                <Text style={styles.texttitle}>{props.type.type}</Text>
                <Text>{props.type.duration}</Text>
            </View>
            <View style={styles.Rightcontainer}>
                <View>
                    <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
                </View>
                <View>
                    <Text>{`${props.type.price} ₹`}</Text>
                    <Text>fdf</Text>
                </View>

            </View>

        </View>
    )
}
export default UberTypeRow;