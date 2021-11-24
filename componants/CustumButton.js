import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustumButton = (props) => {

    return (
        <TouchableOpacity activeOpacity={0.7}
            style={{ ...props.style, ...styles.btn }}
            onPress={props.onPress}>
            <Text style={{ ...props.textstyle }}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#bfbf13',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustumButton;