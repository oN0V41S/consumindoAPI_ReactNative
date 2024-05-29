import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, Alert } from "react-native";

export default function CityList() {
  const [ListCityes, setListCityes] = useState([]);

  useEffect(() => {
    fetch("https://665726aa9f970b3b36c82735.mockapi.io/cityes")
      .then((response) => response.json())
      .then((data) => setListCityes(data));
  }, []);

  const City = ({ name }) => {
    return (
      <View style={style.animal}>
        <Text>{name}</Text>
      </View>
    );
  };

  return (
    <View style={style.cityList}>
      <FlatList
        data={ListCityes}
        renderItem={({ item }) => <City name={item.city} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  cityList: {
    width: 350,
    flex: 1,
    gap: 2,
    padding: 8,
    paddingRight: 80,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  city: {

  }
});
