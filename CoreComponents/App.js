import { View, Text, Image } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Image source={logoImg} style={{width: 300, height:300}} />
      <Image source={{uri:"https://picsum.photos/300"}} />
    </View>
  );
}
