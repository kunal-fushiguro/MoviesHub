import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

export const colors = {
  background: "#121212",
  surface: "#1E1E1E",
  text: "#E0E0E0",
  accent: "#BB86FC",
  textSecondary: "#A0A0A0",
};

interface actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface Porps {
  cast: actor[];
}

const CastList = ({ cast }: Porps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {cast.map((actor) => (
          <View key={actor.id} style={styles.card}>
            {/* Actor Image */}
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
              }}
              style={styles.image}
            />
            {/* Actor Info */}
            <Text style={styles.name} numberOfLines={1}>
              {actor.name}
            </Text>
            <Text style={styles.character} numberOfLines={1}>
              as {actor.character}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    flexDirection: "row",
  },
  card: {
    width: Dimensions.get("screen").width / 2,
    height: Dimensions.get("screen").height / 3,
    marginRight: 16,
    backgroundColor: colors.surface,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  character: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
});

export default CastList;
