import { View, Text, Image } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Image source={logoImg} />
    </View>
  );
}
