import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import MyImageButton from "./components/MyImageButton";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <MyImageButton
              title="Inserir Autor"
              btnColor="#2992C4"
              btnIcon="user-plus"
              customClick={() => navigation.navigate("Register")}
            />

            <MyImageButton
              title="Atualizar Autor"
              btnColor="#A45BB9"
              btnIcon="user-circle"
              customClick={() => navigation.navigate("Update")}
            />

            <MyImageButton
              title="Visualizar Autor"
              btnColor="#F9AD29"
              btnIcon="user"
              customClick={() => navigation.navigate("View")}
            />
            <MyImageButton
              title="Visualizar Todos"
              btnColor="#384F62"
              btnIcon="users"
              customClick={() => navigation.navigate("ViewAll")}
            />
            <MyImageButton
              title="Excluir Autor"
              btnColor="#D1503A"
              btnIcon="user-times"
              customClick={() => navigation.navigate("Delete")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
