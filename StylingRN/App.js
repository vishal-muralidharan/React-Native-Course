import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lightblueBox}>
        <Text>Lightblue box</Text>
      </View>
      <View style={styles.lightgreenBox}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "plum", 
    padding: 60 
  },

  lightblueBox: {
    backgroundColor: "lightblue",
    width: 100,
    height: 100,
    padding: 10,
  },

  lightgreenBox: {
    backgroundColor: "lightgreen",
    width: 100,
    height: 100,
    padding: 10,
  },
});
