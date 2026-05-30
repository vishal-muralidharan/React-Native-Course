import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route, navigation }) {
  const { name = 'Guest' } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Button
        title="Change Name to John and Go Back"
        onPress={() => navigation.navigate('Home', { name: 'John' })}
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
