import React, { useState } from "react";
import { View, Alert, SafeAreaView } from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import axios from "axios";

const DeleteUser = ({ navigation }) => {
  const [id_Autor, setId_Autor] = useState('');

  // Excluir Autor
  async function excluirAutor() {

    try {
      const dados = {id_autor: id_Autor}
      const resposta = await axios.delete("http://10.0.2.2:81/livros_php/api.php", {
        params:dados,
      });
      navigation.navigate("HomeScreen")
      alert("Autor excluído com sucesso")
    } catch (error) {
      navigation.navigate("HomeScreen")
      alert("Erro excluir autor!")
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="ID do autor"
            style={{ padding: 10 }}
            value={id_Autor}
            onChangeText={setId_Autor}
          />
          <Mybutton title="Excluir Autor" onPress={excluirAutor}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteUser;