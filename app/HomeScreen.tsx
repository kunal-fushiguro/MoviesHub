import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { upcommingData, data } from "@/temp/tempdata";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "@/theme/theme";
import TrendingSection from "@/components/TrendingSection";
import UpCommingMovies from "@/components/MoviesList";
import LoadingScreen from "@/components/LoadingScreen";

interface CardsListProps {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const HomeScreen = () => {
  const [upCommingData, setUpCommingData] = useState<CardsListProps[] | null>(
    null
  );
  const [popularMovies, setpopularMovies] = useState<CardsListProps[] | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUpCommingData(upcommingData.results);
      setpopularMovies(data.results);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (upCommingData && popularMovies) {
    return (
      <ScrollView>
        <View style={style.Screeen}>
          <View style={{ marginBottom: 10, marginTop: 20 }}>
            <StatusBar style="light" />
            <View style={style.topBar}>
              <FontAwesome name="bars" size={30} color="white" />
              <Text style={style.text}>
                <Text style={style.differentText}>M</Text>ovie
                <Text style={style.differentText}>H</Text>ub
              </Text>
              <TouchableOpacity>
                <FontAwesome name="search" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* trending Section */}
          <TrendingSection />
          {/* upcomming movies */}
          <UpCommingMovies title="Upcomming Movies" data={upCommingData} />
          {/* Popular Movies */}
          <UpCommingMovies title="Popular Movies" data={popularMovies} />
        </View>
      </ScrollView>
    );
  }
};

const style = StyleSheet.create({
  Screeen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },
  differentText: {
    color: colors.differentColor,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;
