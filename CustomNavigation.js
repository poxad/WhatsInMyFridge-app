//CustomNavigation.js

import React from "react";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import NestedSettings from "./page/NestedSettings";
import SettingsScreen from "./page/Settings.js";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const FirstScreenNavigator = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Settings 2"
          component={SettingsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="NestedScreen1" component={NestedSettings} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { FirstScreenNavigator }; // Stack-Navigator for Screen 1 Tab
