import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Mybutton from './components/Mybutton';
import Mytextinput from './components/Mytextinput';
import { useState } from 'react';
import axios from 'axios';


const Login = ({ navigation }) => {

  const [email, setEmail] = useState ('')
  const [senha, setSenha] = useState ('')

  //visualizar login
  async function validarLogin () {
    try {
      const dados = {email: email, senha: senha};
      const resposta = await axios.get('http://10.0.2.2:81/livros_php/api_login.php',{
        params: dados,
      }
    )
    } catch (error) {
      alert ("Erro ao validar login");
    }
  }



  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.nomeSistema}>Biblioteca Digital</Text>
      <Mytextinput placeholder="Email" value={email} onChangeText={setEmail}/>
      <Mytextinput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <Mybutton
        title="Entrar" 
        onPress={validarLogin}
      />
      <TouchableOpacity >
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 10,
  },
  nomeSistema: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#111825',
  },
  link: {
    color: '#111825',
    textAlign: 'center',
    marginTop: 15,
  },
};

export default Login;