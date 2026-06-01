import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Link href="./1" relativeToDirectory>Product 1</Link>
      <Link href="./2" relativeToDirectory>Product 2</Link>
      <Link href="./3" relativeToDirectory>Product 3</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});