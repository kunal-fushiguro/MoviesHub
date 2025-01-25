import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import MoviesDetails from "./MoviesDetails";
import PersonDetails from "./PersonDetails";
import SearchScreen from "./SearchScreen";
import { RootStackParamList } from "@/types";

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
      <Stack.Screen
        name="PersonDetails"
        options={{ headerShown: false }}
        component={PersonDetails}
      />
      <Stack.Screen
        name="SerachScreen"
        options={{ headerShown: false }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default RootLayout;
