import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
 } from "react-native";
 import * as animatable from 'react-native-animatable'

export  default function Welcome() {
    return (
        <View 
        style={styles.container}>

            <animatable.Image style = {styles.containerLogo}
                    source={require('../../../assets/logo.png')}
                    resizeMode="contain"
                    animation={'fadeInDown'}></animatable.Image>

            <animatable.View delay={500} animation='fadeInLeft' style = {styles.containerHeader}>
                <Text style = {styles.message}>
                    Bem vindo(a)
                </Text>
            </animatable.View>
            <animatable.View delay={1000} animation='fadeInUp' style = {styles.containerForm}>
                <Text style={styles.login}>Entre com sua conta</Text>

                <Text style={styles.title}>Email ou CPF</Text>
                <TextInput
                placeholder="Digite o E-mail ou seu CPF"
                style = {styles.input}>
                </TextInput>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Digite sua senha"
                style = {styles.input}
                secureTextEntry = {true}>
                </TextInput>
                

                <TouchableOpacity style={styles.button}>
                    <Text style= {styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style= {styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </animatable.View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFCFCF',
    },
    containerLogo: {
        width: '80%',
        alignSelf: 'center',
        marginTop: '10%',
    },
    containerHeader: {
       marginBottom: '30%',
       marginTop: '5%',
       paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '10%',
        paddingTop: '10%',
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '5%'
    },
    title: {
        fontSize: 18,
        color: '#000',
        marginTop: '8%',
        marginBottom: '5%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginBottom: '1%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2358FF',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: '15%'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        alignSelf: 'center',
        marginTop: '5%'
    },
    registerText: {
        color: '#A1A1A1',
        fontSize: 16,
        fontStyle: 'italic'
    }
});