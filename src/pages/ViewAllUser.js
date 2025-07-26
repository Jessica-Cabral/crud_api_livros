import { useState, useEffect } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet } from "react-native";
import axios from 'axios';

const ViewAllUser = () => {
  const [todosAutores, setTodosAutores] = useState ([]);

  //visualizar todos usuarios
  async function visualizarTodos () {
    try {
      const resposta = await axios.get('http://10.0.2.2:81/livros_php/api.php');
      setTodosAutores(resposta.data)
    } catch (error) {
      alert ("Erro ao consultar");
    }
  }

  //excecutar visualizar tosos
  useEffect(() =>{
    visualizarTodos();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={todosAutores}
            renderItem={({item}) =>(
              <View style={styles.view}>
                <Text>ID:{item.id_autor}</Text>
                <Text>Nome: {item.nome}</Text>
              </View>
            )}
          />
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
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 8,
    borderRadius:5,
    backgroundColor: "lightgray"
  }
});

export default ViewAllUser;
