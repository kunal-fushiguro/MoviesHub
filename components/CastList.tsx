import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { actor } from "@/types";
import { colorsTwo } from "@/theme/theme";

interface Porps {
  cast: actor[];
}

const CastList = ({ cast }: Porps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {cast.map((actor) => (
          <View key={actor.id}>
            <View style={styles.card}>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PersonDetails", { id: actor.id });
              }}
            >
              <View style={styles.buttonStyle}>
                <Text style={{ color: colorsTwo.text, textAlign: "center" }}>
                  Read more
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsTwo.background,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: colorsTwo.text,
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
    backgroundColor: colorsTwo.surface,
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
    color: colorsTwo.text,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  character: {
    color: colorsTwo.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  buttonStyle: {
    width: 120,
    backgroundColor: colorsTwo.differentColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: "auto",
    marginVertical: 10,
    textAlign: "center",
  },
});

export default CastList;
