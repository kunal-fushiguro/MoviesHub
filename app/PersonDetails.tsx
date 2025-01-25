import { colors } from "@/theme/theme";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { personDetails, creditsMovies } from "@/temp/tempdata";
import ListMovies from "@/components/MoviesList";
import LoadingScreen from "@/components/LoadingScreen";
import Topbar from "@/components/Topbar";
import { CardsTypesTwo, CastDetails, RootStackParamList } from "@/types";

const PersonDetails = () => {
  const [personData, setPersonData] = useState<CastDetails | null>(null);
  const [work, setWork] = useState<CardsTypesTwo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute<RouteProp<RootStackParamList, "PersonDetails">>();
  const { id } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setPersonData(personDetails);
      setWork(creditsMovies.cast);
      setLoading(false);
    }, 2000);
  }, [id]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (personData && work) {
    return (
      <>
        <ScrollView style={styles.container}>
          <Topbar marginTop={5} />
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri:
                  "https://image.tmdb.org/t/p/w500/" + personData.profile_path,
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{personData.name}</Text>
            <Text style={styles.label}>Biography</Text>
            <Text style={styles.biography}>{personData.biography}</Text>
            <Text style={styles.label}>Born</Text>
            <Text style={styles.text}>
              {personData.birthday} in {personData.place_of_birth}
            </Text>
            <TouchableOpacity
              style={styles.homepageButton}
              onPress={() => {
                Linking.openURL(personData.homepage);
              }}
            >
              <Text style={styles.homepageText}>Visit Homepage</Text>
            </TouchableOpacity>
          </View>
          {/* person movies */}
          <ListMovies data={work} title="Work" />
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 25,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: colors.text,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: colors.text,
  },
  biography: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  text: {
    fontSize: 14,
    color: colors.text,
  },
  homepageButton: {
    marginTop: 20,
    backgroundColor: colors.differentColor,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  homepageText: {
    color: colors.text,
    fontSize: 16,
  },
});

export default PersonDetails;
