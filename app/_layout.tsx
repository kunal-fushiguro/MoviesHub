import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import MoviesDetails from "./MoviesDetails";

type RootStackParamList = {
  Home: undefined;
  MoviesDetails: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="MoviesDetails"
        options={{ headerShown: false }}
        component={MoviesDetails}
      />
    </Stack.Navigator>
  );
};

export default RootLayout;
