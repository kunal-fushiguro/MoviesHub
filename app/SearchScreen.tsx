import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import { colors } from "@/theme/theme";

const SearchScreen = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.text}>SearchScreen</Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    color: colors.text,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    minHeight: Dimensions.get("screen").height,
    paddingTop: 25,
  },
});

export default SearchScreen;
