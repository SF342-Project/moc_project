import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../screens/Homepage";
import TongfahLocation from "../screens/TongfahLocation";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen
      name="TongfahScreen"
      component={TongfahLocation}
      />
    </Stack.Navigator>
  );
}

export default AppStack;