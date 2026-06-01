
import { View, Text, StyleSheet, Button } from "react-native";
import { useLayoutEffect } from "react";

export default function AboutScreen({ navigation, route }) {
  const { name = 'Guest' } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
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
