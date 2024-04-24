import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export  default function Home() {
    const navigation = useNavigation();
    function login(){
        if (username == "")
        Alert.alert('Erro', 'Preencha o campo de usuário');
    }

    return (
        <View style={styles.container}>
            <animatable.Image style={styles.containerLogo}
                source={require('../../../assets/logo.png')}
                resizeMode="contain"
                animation={'fadeInDown'} />

           
            <animatable.View delay={1000} animation='fadeInUp' style={styles.containerForm}>
            
            


            </animatable.View>
        </View>
    );
}