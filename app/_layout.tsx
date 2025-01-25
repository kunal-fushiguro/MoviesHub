import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import MoviesDetails from "./MoviesDetails";
import PersonDetails from "./PersonDetails";
import SearchScreen from "./SearchScreen";
import { RootStackParamList } from "@/types";
import AllMoviesList from "./AllMoviesList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootLayout = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
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
        <Stack.Screen
          name="AllMoviesList"
          options={{ headerShown: false }}
          component={AllMoviesList}
        />
      </Stack.Navigator>
    </QueryClientProvider>
  );
};

export default RootLayout;
