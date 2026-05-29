import { View, Text, Image, ScrollView } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text style={{ color: 'white', marginTop: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec condimentum, nisl eu ultrices ultricies, nunc nisl
          aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec 
          condimentum, nisl eu ultrices ultricies, nunc nisl aliquam 
          nunc, eget aliquam nisl nunc sit amet nisl. Donec condimentum, 
          nisl eu ultrices ultricies, nunc nisl aliquam nunc, eget 
          aliquam nisl nunc sit amet nisl. Donec condimentum, nisl 
          eu ultrices ultricies, nunc nisl aliquam nunc, eget aliquam 
          nisl nunc sit amet nisl. Donec condimentum, nisl eu ultrices 
          ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet 
          nisl. Donec condimentum, nisl eu ultrices ultricies, nunc 
          nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl.
        </Text>
      </ScrollView>
    </View>
  );
}
