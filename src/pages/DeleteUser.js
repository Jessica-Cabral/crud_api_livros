import React, { useState } from "react";
import { View, Alert, SafeAreaView } from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";

const DeleteUser = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="ID do autor"
            style={{ padding: 10 }}
          />
          <Mybutton title="Excluir Autor"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteUser;
