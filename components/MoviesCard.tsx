import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "@/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

interface Props {
  imgUrl: string;
  title: string;
  releaseDate: string;
  voteAverage: number;
  overview: string;
  id: string;
}

const { width } = Dimensions.get("window");

const MoviesCard = ({
  imgUrl,
  title,
  releaseDate,
  voteAverage,
  overview,
  id,
}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleClick = () => {
    navigation.navigate("MoviesDetails", { id });
  };

  return (
    <View style={styles.card}>
      {/* Movie Poster */}
      <View style={styles.imgContainer}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </View>

      {/* Movie Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDate}>Release: {releaseDate}</Text>
        <Text style={styles.rating}>Rating: {Math.floor(voteAverage)}/10</Text>
        <Text style={styles.overview} numberOfLines={3}>
          {overview}
        </Text>
      </View>
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.buttonStyle}>
          <Text style={{ color: colors.text }}>Read more</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.7,
    marginHorizontal: 10,
    height: "auto",
    borderRadius: 15,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  imgContainer: {
    width: "100%",
    height: width * 0.8,
  },
  image: {
    width: "100%",
    height: width * 0.9,
    objectFit: "contain",
  },
  detailsContainer: {
    width: "auto",
    height: "auto",
    padding: 10,
    marginTop: 30,
  },
  title: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  releaseDate: {
    color: colors.text,
    fontSize: 12,
    marginBottom: 5,
  },
  rating: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 10,
  },
  overview: {
    color: colors.text,
    fontSize: 12,
  },
  buttonStyle: {
    width: "auto",
    backgroundColor: colors.differentColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default MoviesCard;
