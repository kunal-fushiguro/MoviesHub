import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { colors } from "@/theme/theme";
import Carousel from "react-native-reanimated-carousel";
import TrendingMoviesCards from "./TrendingMoviesCards";

import { CardsTypesTwo } from "@/types";

interface Props {
  trendData: CardsTypesTwo[];
}

const TrendingSection = ({ trendData }: Props) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const width = Dimensions.get("window");

  return (
    <View style={style.conatiner}>
      <View style={{ flex: 1 }}>
        <Carousel
          width={width.width}
          height={width.height * 0.6}
          data={trendData}
          loop
          autoPlay
          autoPlayInterval={5000}
          renderItem={({ item, index }) => (
            <TrendingMoviesCards
              urlImg={baseUrl + item.poster_path}
              key={index}
            />
          )}
        />
      </View>
      <Text style={style.text}>Trending</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  conatiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 5,
    marginHorizontal: 5,
    gap: 10,
  },
});
export default TrendingSection;
