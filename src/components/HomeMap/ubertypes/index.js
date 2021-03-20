import React from 'react';
import {
    Pressable,
    Text,
    View
} from 'react-native';
import styles from './style'
import TypesData from '../../../assests/UberAssets/UberAssets/data/types'
import UberTypeRow from '../ubertyperow';
const UberTypes = () => {
    console.log(TypesData)
    const confirm =()=>{
        console.warn('confirm press')
    }
    return (
        <View>
            <Text>this is uber types app</Text>
          {
              TypesData.map((type)=><UberTypeRow type={type} />)
          }
            <Pressable
            onPress={confirm}
            style={{width:'90%',backgroundColor:'black',alignSelf:'center'}}
            >
                <Text    
                style={{color:'white',fontSize:18,fontWeight:'bold',padding:20,alignSelf:'center'}}
                >confirm uber</Text>
            </Pressable>
        </View>
    )
}
export default UberTypes;