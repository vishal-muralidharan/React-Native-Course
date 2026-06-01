import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#8b5cf6",
          drawerStyle: {
            backgroundColor: "#ffffff",
          },
          drawerActiveTintColor: "#8b5cf6",
          drawerInactiveTintColor: "#64748b",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home title",
            drawerLabel: "Home label",
          }}
        />
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Dashboard title",
            drawerLabel: "Dashboard label",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings title",
            drawerLabel: "Settings label",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}