import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { colors } from "@/theme/theme";
import { CardsTypesTwo } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

interface Props {
  title: string;
  data: CardsTypesTwo[] | null;
}

const MoviesListVertically = ({ title, data }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {data == null && (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>No movies found.</Text>
        </View>
      )}
      <View style={styles.cardContainer}>
        {data != null &&
          data.map((item, index) => (
            <View key={index} style={styles.cardBox}>
              <Image
                source={{
                  uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
                }}
                style={styles.posterImage}
              />
              <Text numberOfLines={1} style={styles.cardTitle}>
                {item.title}
              </Text>
              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() => {
                  navigation.navigate("MoviesDetails", { id: item.id });
                }}
              >
                <Text style={styles.readMoreText}>Read more</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  topContainer: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  title: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 24,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    color: colors.text,
    fontSize: 18,
    fontStyle: "italic",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardBox: {
    width: cardWidth,
    borderRadius: 10,

    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  posterImage: {
    width: "100%",
    height: cardWidth * 1.5,
    resizeMode: "cover",
  },
  cardTitle: {
    color: colors.text,
    fontWeight: "600",
    fontSize: 14,
    padding: 10,
  },
  readMoreButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.differentColor,
    alignItems: "center",
    borderRadius: 5,
  },
  readMoreText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default MoviesListVertically;
