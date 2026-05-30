import "./polyfill";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{
            title: "My Dashboard",
            drawerLabel: "Home Menu"
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            title: "App Settings", 
            drawerLabel: "Preferences" 
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}