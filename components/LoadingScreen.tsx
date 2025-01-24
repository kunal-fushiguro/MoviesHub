import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/theme/theme";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.differentColor} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  loadingText: { marginTop: 10, fontSize: 16, color: colors.text },
});

export default LoadingScreen;
