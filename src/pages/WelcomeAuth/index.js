import React from 'react';
import { View, Text, Image } from 'react-native';
import ActionButton from './ActionButton';
import { welcomeAuth } from '../../assets';

const WelcomeAuth = () => {
    return(
        <View style={styles.wrapper.page}>
            
            <Image source={welcomeAuth} style={styles.wrapper.illustration}/>
            <Text style={styles.text.title}>Arisan</Text>
            <Text style={styles.text.subtitle}>buat santai aja</Text>
            <ActionButton/>
        </View>
    );
};

const styles = {
    wrapper: {
        page:{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        illustration:{
            width:206,
            height:148,
            marginBottom: 9,
            marginTop:30
        },
    },
    text:{
        title:{
            fontSize: 48, fontWeight: 'semibold', color: '#6C5CE7'
        },
        subtitle:{
            fontSize: 14, fontWeight: 'semibold', color: '#6C5CE7', marginBottom:148
        }
    }
}

export default WelcomeAuth;