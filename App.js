import "react-native-gesture-handler";

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/pages/HomeScreen";
import RegisterUser from "./src/pages/RegisterUser";
import UpdateUser from "./src/pages/UpdateUser";
import ViewUser from "./src/pages/ViewUser";
import ViewAllUser from "./src/pages/ViewAllUser";
import DeleteUser from "./src/pages/DeleteUser";
import Login from "./src/pages/Login";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "API Autor",
            headerStyle: {
              backgroundColor: "#00AD98",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "API Autor",
            headerStyle: {
              backgroundColor: "#00AD98",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: "Inserir Autor",
            headerStyle: {
              backgroundColor: "#2992C4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: "Atualizar Autor",
            headerStyle: {
              backgroundColor: "#A45BB9",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: "Visualizar Autor",
            headerStyle: {
              backgroundColor: "#F9AD29",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: "Visualizar Todos",
            headerStyle: {
              backgroundColor: "#384F62",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: "Excluir Autor",
            headerStyle: {
              backgroundColor: "#D1503A",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
