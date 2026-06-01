import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation, route }) {
  const name = route?.params?.name || 'Guest';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", { name: "Vishal" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
