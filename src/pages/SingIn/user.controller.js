import { Alert } from 'react-native';
import api from '../../services/api';


export const handleLogin = async (username, password, navigation) => {
    if (!username || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    try {
      const response = await api.post('/auth/login', { username, password });
      console.log('Login Success:', response.data)
      navigation.navigate('home');
    } catch (error) {
      console.error('login failed:', error);
      Alert.alert('Erro', 'Falha ao logar');
    }
  };