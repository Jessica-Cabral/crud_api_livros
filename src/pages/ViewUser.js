import React, { useState } from "react";
import { Text, View, SafeAreaView, Button, StyleSheet, FlatList } from "react-native";
import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import axios from 'axios';

const ViewUser = ({ Navigation }) => {
  const [todosAutores, setTodosAutores] = useState([]);
  const [nomeAutor, setNomeAutor] = useState("");

  async function visualizarTodos() {
    try {
      const dados ={nome: nomeAutor};
      //informa a url da api e os parametros
      const resposta = await axios.post(
        "http://10.0.2.2:81/livros_php/api.php",
        {
          params:dados,
        });
    } catch (error) {
      alert("Erro ao consultar");
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Mytext text="Nome autor" />
          <Mytextinput placeholder="Nome autor" style={{ padding: 10 }} value={nomeAutor} onChangeText={setNomeAutor} />
          <Mybutton title="Buscar Autor" onPress={visualizarTodos} />
          <View style={{ flex: 1 }}>
            <FlatList
              style={{ marginTop: 30 }}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              data={todosAutores}
              renderItem={({ item }) => (
                <View style={styles.view}>
                  <Text>ID:{item.id_autor}</Text>
                  <Text>Nome: {item.nome}</Text>
                  <Button
                    title="Atualizar"
                    onPress={() =>
                      navigation.navigate("Update", {
                        id_autor: `${item.id_autor}`,
                        nome: `${item.nome}`,
                      })
                    }
                  />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textheader: {
    color: "#111",
    fontSize: 12,
    fontWeight: "700",
  },
  textbottom: {
    color: "#111",
    fontSize: 18,
  },
  view: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    gap: 30,
  },
});
export default ViewUser;
