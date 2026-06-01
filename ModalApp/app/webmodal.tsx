import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

export default function Modal() {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
      }}
    >
      <Link dismissTo href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: "90%",
        }}
      >
      </Animated.View>
    </Animated.View>
  );
}