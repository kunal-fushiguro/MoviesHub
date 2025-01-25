import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "@/theme/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import MoviesCard from "./MoviesCard";
import { CardsTypesTwo } from "@/types";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

interface Props {
  title: string;
  data: CardsTypesTwo[];
  fetchType:
    | "popular"
    | "now_playing"
    | "top_rated"
    | "upcoming"
    | "recommendations";
}

const ListMovies = ({ title, data, fetchType }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <FontAwesome5 name="plus" size={24} color={colors.differentColor} />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scrollable Movie Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map((item) => (
          <MoviesCard
            key={item.id}
            imgUrl={baseUrl + item.poster_path}
            title={item.title}
            releaseDate={item.release_date}
            voteAverage={item.vote_average}
            overview={item.overview}
            id={item.id.toString()}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
    gap: 20,
    paddingBottom: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 20,
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
});

export default ListMovies;
