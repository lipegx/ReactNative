import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity } 
    from "react-native";
import * as animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export  default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                
                    <animatable.Image 
                    animation="flipInY"
                    source={require('../../../assets/logo.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                    />
            </View>
            <animatable.View delay={600} animation = "fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>
                    MUDAH! Agora é o momento!
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar
                </Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text>Acessar</Text>
                </TouchableOpacity>
                </animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A3A3A',
    },
    containerLogo: {
        width: 350, // Exemplo de largura fixa
        height: 100, // Exemplo de altura fixa
        flex: 2, // Ou use flex para dimensionar dinamicamente
        justifyContent: 'center',
        alignItems: 'top',
    },
    containerForm: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    title :{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3A3A3A',
    },

    text: {
        fontSize: 16,
        color: '#3A3A3A',
    },

    button: {
        position: "absolute",
        backgroundColor: '#FFF32D',
        borderRadius: '50',
        width: '60%',
        alignSelf: 'center',
        paddingVertical: '8%',
        bottom: '15%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
});