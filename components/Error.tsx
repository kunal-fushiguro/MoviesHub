import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colors } from "@/theme/theme";

const ErrorComponent = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Error</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: colors.background,
  },
  text: { color: colors.differentColor, fontWeight: "bold", fontSize: 30 },
});

export default ErrorComponent;
