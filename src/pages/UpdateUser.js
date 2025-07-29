import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from "react-native";

import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const UpdateUser = ({ navigation }) => {
  const route = useRoute();
  const { id_autor, nome } = route.params;
  const [id, setID] = useState(id_autor);
  const [autor, setAutor] = useState(nome);

  const [nomeAutor, setNomeAutor] = useState("");

  //atualizar autor
  async function atualizarAutor() {
    try {
      const resposta = await axios.put("http://10.0.2.2:81/livros_php/api.php", {
        id_autor: id,
        nome: autor,
      });
      navigation.navigate("View");
      alert("Autor atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      //navigation.navigate("View");
      alert("Erro ao atualizar autor!");
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
              <Mytext text="Filtro de Autor" />
              <Mytextinput
                placeholder="Entre com o ID do autor"
                style={{ padding: 10 }}
                value={id}
                onChangeText={setID}
              />

              <Mytextinput
                placeholder="Entre com o Nome"
                style={{ padding: 10 }}
                value={autor}
                onChangeText={setAutor}
              />

              <Mybutton title="Atualizar Autor" onPress={atualizarAutor} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
