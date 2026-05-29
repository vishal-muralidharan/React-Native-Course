import { useState } from 'react';
import { View, Button, Image, Text, Pressable, ScrollView, Modal } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>

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
