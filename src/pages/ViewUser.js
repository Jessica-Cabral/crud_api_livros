import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList, Button, Alert } from "react-native";
import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import axios from "axios";

const ViewUser = ({ navigation }) => {
  const [autores, setAutores] = useState([]);
  const [nomeAutor, setNomeAutor] = useState("");

  async function getAutor() {
    if (!nomeAutor.trim()) {
      alert("Digite um nome para buscar!");
      return;
    }

    try {
      const resposta = await axios.get("http://10.0.2.2:81/livros_php/api.php", {
        params: { nome: nomeAutor }
      });
      setAutores(resposta.data);
    } catch (error) {
      console.error("Erro na consulta:", error);
      alert("Erro ao consultar");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Mytext text="Buscar Autor" />
        <Mytextinput
          placeholder="Digite o nome do autor"
          value={nomeAutor}
          onChangeText={setNomeAutor}
          style={{ marginBottom: 10 }}
        />
        <Mybutton title="Buscar Autor" onPress={getAutor} />

        <FlatList
          data={autores}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Nenhum autor encontrado.
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
                marginVertical: 5,
                backgroundColor: "#f5f5f5",
                borderRadius: 8,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 2,
              }}
            >
              <View>
                <Text style={{ fontWeight: "bold" }}>Código: {item.id_autor}</Text>
                <Text>Nome: {item.nome}</Text>
              </View>
              <Button
                title="Atualizar"
                onPress={() => navigation.navigate("Update", {
                  id_autor: `${item.id_autor}`,
                  nome: `${item.nome}`
                })}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;