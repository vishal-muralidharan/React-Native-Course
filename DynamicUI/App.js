import { SafeAreaView, View, Text, StyleSheet, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
