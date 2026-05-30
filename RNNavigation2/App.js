import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen />
        <Tab.Screen />
        <Tab.Screen />
      </Tab.Navigator>
    </NavigationContainer>
  )
}