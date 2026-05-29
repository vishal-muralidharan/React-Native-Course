import { View, Button, Image, Text, Pressable, ScrollView } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
        disabled
      />

      <ScrollView style={{ marginTop: 16 }}>
        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>

        <Pressable onPress={() => console.log("Text pressed")}>
          <Text style={{ color: 'white', marginTop: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, nisl eu ultrices ultricies, nunc nisl aliquam nunc,
            eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
            ultrices ultricies, nunc nisl aliquam nunc, eget aliquam nisl
            nunc sit amet nisl. Donec condimentum, nisl eu ultrices ultricies,
            nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
            condimentum, nisl eu ultrices ultricies, nunc nisl aliquam nunc,
            eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
            ultrices ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
            sit amet nisl.
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
