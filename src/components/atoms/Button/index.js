import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors } from '../../../utils';

export const Button = ({title}) => {
    return (
        <TouchableOpacity style={styles.wrapper.button}>
                <Text style={styles.wrapper.button.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export const ButtonDisable = ({title}) => {
    return (
        <TouchableOpacity style={styles.wrapper.buttonDisable}>
                <Text style={styles.wrapper.button.text}>{title}</Text>
        </TouchableOpacity>
    )
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
