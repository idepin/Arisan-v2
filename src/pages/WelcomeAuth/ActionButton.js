import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils';
import { Button, ButtonDisable } from '../../components';

const ActionButton = () => {
    return (
        <View style={{marginBottom: 43, maxWidth:277}}>
            <Button title="Daftar"/>
            <Text style={styles.text}>
                    Sudah memiliki akun?
            </Text>
            <ButtonDisable title="Login"/>
        </View>
    );
}

const styles={
    wrapper:{
        button:{
            backgroundColor: colors.default,
            borderRadius: 25,
            paddingVertical: 13,
            width:277,
            text:{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center'
            }
        },
        buttonDisable:{
            backgroundColor: colors.disable,
            borderRadius: 25,
            paddingVertical: 13,
        }
    },
    text:{
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        marginVertical: 8
    }
}
export default ActionButton;