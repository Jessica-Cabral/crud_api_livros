import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";

const ViewUser = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Mytext text="Nome autor" />
          <Mytextinput
            placeholder="Nome autor"
            style={{ padding: 10 }}
          />
          <Mybutton title="Buscar Autor" />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
            }}
          >
            <Text>Código : </Text>
            <Text>Nome : </Text>
            <Text>Telefone : </Text>
            <Text>Endereço : </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;
