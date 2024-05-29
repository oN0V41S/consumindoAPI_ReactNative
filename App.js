import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimalList from "./componentes/animalList/animalList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Lista de Cidades ( Fake ) </Text>
      {/* <AnimalList/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#53B6E1",
    alignItems: "center",
    color: "#fff",
    gap: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
