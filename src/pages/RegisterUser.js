import { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import axios from 'axios';


const RegisterUser = ({ navigation }) => {
  const [nomeAutor, setNomeAutor] = useState('');

  //inserir autor
  async function inserirAutor () {
    try {
      //informa a url da api e os parametros
      const resposta = await axios.post('http://10.0.2.2:81/livros_php/api.php', {
        nome: nomeAutor,
      });
      navigation.navigate('HomeScreen');
      alert ("Autor inserido com sucesso!");
    } catch (error) {
      navigation.navigate('HomeScreen');
      alert ("Erro ao inserir autor");
    }
  }

    

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <Mytextinput
                placeholder="Nome do autor"
                style={{ padding: 10 }}
                value={nomeAutor}
                onChangeText={setNomeAutor}
              />

              <Mybutton title="Salvar" onPress={inserirAutor}/>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;
