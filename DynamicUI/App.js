import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const boxSize = {
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60%" : "90%",
  };

  const textSize = {
    fontSize: windowWidth > 500 ? 50 : 24,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, boxSize]}>
        <Text style={[styles.text, textSize]}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontSize is set dynamically via inline style
  },
});
