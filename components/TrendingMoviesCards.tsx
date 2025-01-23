import { colors } from "@/theme/theme";
import React from "react";
import { Dimensions } from "react-native";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

interface CardsProps {
  urlImg: string;
}

const width = Dimensions.get("window");

const TrendingMoviesCards = ({ urlImg }: CardsProps) => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: urlImg,
        }}
        style={style.imgStyle}
      />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 10,
    fontWeight: "bold",
  },
  container: {
    width: "80%",
    marginHorizontal: "auto",
    height: "90%",
  },
  imgStyle: {
    width: "100%",
    height: width.height * 0.6,
    borderRadius: 20,
  },
});

export default TrendingMoviesCards;
