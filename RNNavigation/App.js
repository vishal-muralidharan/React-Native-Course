import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CourseListScreen from './screens/CourseListScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false, title: 'Home'}} />
      <Stack.Screen name='About' component={AboutScreen} options={{title: 'About'}} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple',
          headerShown: false
        }}
      >
        <Tab.Screen 
          name='HomeStack' 
          component={HomeStack} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name='home' size={20} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name='Course List' 
          component={CourseListScreen} 
          options={{
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name='list' size={20} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            headerShown: true,
            tabBarLabel: 'My profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name='person' size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Main' component={HomeTabs} options={{title: 'Main App'}} />
        <Drawer.Screen name='Dashboard' component={DashboardScreen} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

