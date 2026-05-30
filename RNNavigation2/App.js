// 1. DOMException Polyfill (MUST BE LINE 1)
if (typeof globalThis.DOMException === 'undefined') {
  globalThis.DOMException = class DOMException extends Error {
    constructor(message, name) {
      super(message);
      this.name = name || 'DOMException';
    }
  };
}

// 2. Gesture Handler (MUST BE LINE 2)
import 'react-native-gesture-handler';

// 3. The rest of your imports...
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
