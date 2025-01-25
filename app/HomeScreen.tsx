import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "@/theme/theme";
import TrendingSection from "@/components/TrendingSection";
import UpCommingMovies from "@/components/MoviesList";
import LoadingScreen from "@/components/LoadingScreen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { CardsTypesTwo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { moviesLists } from "@/api";
import ErrorComponent from "@/components/Error";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const {
    data: nowPlaying = [],
    isLoading: isLoadingNowPlaying,
    isError: isErrorNowPlaying,
  } = useQuery<CardsTypesTwo[]>({
    queryKey: ["nowPlaying"],
    queryFn: () => moviesLists("now_playing", 1),
    staleTime: 300000,
  });

  const {
    data: upCommingData = [],
    isLoading: isLoadingUpCommingData,
    isError: isErrorUpCommingData,
  } = useQuery<CardsTypesTwo[]>({
    queryKey: ["upComingMovies"],
    queryFn: () => moviesLists("upcoming", 1),
    staleTime: 300000,
  });

  const {
    data: popularMovies = [],
    isLoading: isLoadingPopularMovies,
    isError: isErrorPopularMovies,
  } = useQuery<CardsTypesTwo[]>({
    queryKey: ["popularMovies"],
    queryFn: () => moviesLists("popular", 1),
    staleTime: 300000,
  });

  const {
    data: topMovies = [],
    isLoading: isLoadingTopMovies,
    isError: isErrorTopMovies,
  } = useQuery<CardsTypesTwo[]>({
    queryKey: ["topRatedMovies"],
    queryFn: () => moviesLists("top_rated", 1),
    staleTime: 300000,
  });

  const isLoading =
    isLoadingNowPlaying ||
    isLoadingUpCommingData ||
    isLoadingPopularMovies ||
    isLoadingTopMovies;

  const isError =
    isErrorNowPlaying ||
    isErrorUpCommingData ||
    isErrorPopularMovies ||
    isErrorTopMovies;

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SerachScreen");
              }}
            >
              <FontAwesome name="search" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Trending Section */}
        <TrendingSection trendData={nowPlaying.slice(0, 5)} />

        {/* Upcoming Movies */}
        <UpCommingMovies
          title="Upcoming Movies"
          data={upCommingData}
          fetchType="upcoming"
        />

        {/* Popular Movies */}
        <UpCommingMovies
          title="Popular Movies"
          data={popularMovies}
          fetchType="popular"
        />

        {/* Top Rated Movies */}
        <UpCommingMovies
          title="Top Rated Movies"
          data={topMovies}
          fetchType="top_rated"
        />

        {/* Now Playing */}
        <UpCommingMovies
          title="Now Playing"
          data={nowPlaying}
          fetchType="now_playing"
        />
      </View>
    </ScrollView>
  );
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
