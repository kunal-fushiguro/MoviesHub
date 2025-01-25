import { movieDetailsData, moviesCast, moviesRecommendations } from "@/api";
import CastList from "@/components/CastList";
import ErrorComponent from "@/components/Error";
import LoadingScreen from "@/components/LoadingScreen";
import ListMovies from "@/components/MoviesList";
import Topbar from "@/components/Topbar";
import { colors } from "@/theme/theme";
import { actor, CardsTypes, CardsTypesTwo, RootStackParamList } from "@/types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const MovieDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, "MoviesDetails">>();
  const { id } = route.params;
  const tempData = {
    adult: false,
    backdrop_path: "/8JaU1ez5TSrRSmncB0Xh2YQavXP.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 12,
        name: "Adventure",
      },
    ],
    homepage: "",
    id: 204,
    imdb_id: "tt0046268",
    origin_country: ["FR"],
    original_language: "fr",
    original_title: "Le Salaire de la peur",
    overview:
      "In a run-down South American town, four men are paid to drive trucks loaded with nitroglycerin into the jungle through to the oil field. Friendships are tested and rivalries develop as they embark upon the perilous journey.",
    popularity: 21.646,
    poster_path: "/dZyZSosIlWcpQkV0f7pXcrV2TQV.jpg",
    production_companies: [
      {
        id: 11788,
        logo_path: null,
        name: "Compagnie Industrielle et Commerciale Cinématographique",
        origin_country: "FR",
      },
      {
        id: 141,
        logo_path: null,
        name: "Véra Films",
        origin_country: "FR",
      },
      {
        id: 144,
        logo_path: null,
        name: "Fono Roma",
        origin_country: "IT",
      },
      {
        id: 534,
        logo_path: null,
        name: "Filmsonor",
        origin_country: "FR",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "FR",
        name: "France",
      },
      {
        iso_3166_1: "IT",
        name: "Italy",
      },
    ],
    release_date: "1953-04-22",
    revenue: 0,
    runtime: 153,
    spoken_languages: [
      {
        english_name: "French",
        iso_639_1: "fr",
        name: "Français",
      },
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
      {
        english_name: "Spanish",
        iso_639_1: "es",
        name: "Español",
      },
      {
        english_name: "Italian",
        iso_639_1: "it",
        name: "Italiano",
      },
      {
        english_name: "German",
        iso_639_1: "de",
        name: "Deutsch",
      },
    ],
    status: "Released",
    tagline: "‘Dynamic’ ‘Tremendous’ ‘Shattering’",
    title: "The Wages of Fear",
    video: false,
    vote_average: 8.025,
    vote_count: 959,
  };

  const {
    data: movie = tempData,
    isLoading: loadingMoviesDetails,
    isError: errorMoviesDetails,
  } = useQuery<CardsTypes>({
    queryKey: ["movieDetails", id],
    queryFn: () => movieDetailsData(id),
    staleTime: 300000,
  });

  const {
    data: moviesCastData = [],
    isLoading: loadingMoviesCastData,
    isError: errorMoviesCastData,
  } = useQuery<actor[]>({
    queryKey: ["movieCast", id],
    queryFn: () => moviesCast(id),
    staleTime: 300000,
  });

  const {
    data: recommendations = [],
    isLoading: isLoadingrecommendations,
    isError: isErrorrecommendations,
  } = useQuery<CardsTypesTwo[]>({
    queryKey: ["recommendations", id],
    queryFn: () => moviesRecommendations(id),
    staleTime: 300000,
  });

  const loading =
    loadingMoviesCastData || loadingMoviesDetails || isLoadingrecommendations;

  const error =
    errorMoviesDetails || errorMoviesCastData || isErrorrecommendations;
  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Topbar marginTop={20} />
        {/* Backdrop Image */}
        {movie.backdrop_path && (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            }}
            style={styles.backdrop}
          />
        )}
        {/* Poster and Title */}
        <View style={styles.header}>
          {movie.poster_path && (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
              style={styles.poster}
            />
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.tagline}>
              {movie.tagline || "No tagline available"}
            </Text>
          </View>
        </View>
        {/* Details Section */}
        <View style={styles.details}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.overview}>
            {movie.overview || "No overview available"}
          </Text>

          <Text style={styles.sectionTitle}>Genres</Text>
          <Text style={styles.text}>
            {movie.genres?.map((genre) => genre.name).join(", ") ||
              "No genres available"}
          </Text>

          <Text style={styles.sectionTitle}>Details</Text>
          <Text style={styles.text}>
            Release Date: {movie.release_date || "N/A"}
          </Text>
          <Text style={styles.text}>
            Runtime: {movie.runtime || "N/A"} mins
          </Text>
          <Text style={styles.text}>
            Rating: {movie.vote_average || "N/A"} ({movie.vote_count || "0"}{" "}
            votes)
          </Text>
          <Text style={styles.text}>
            Revenue: ${movie.revenue?.toLocaleString() || "N/A"}
          </Text>

          <Text style={styles.sectionTitle}>Production Companies</Text>
          {movie.production_companies?.length ? (
            movie.production_companies.map((company, index) => (
              <Text key={index} style={styles.text}>
                {company.name} ({company.origin_country || "N/A"})
              </Text>
            ))
          ) : (
            <Text style={styles.text}>No production companies available</Text>
          )}
        </View>
        {/* Cast Lists */}
        <CastList cast={moviesCastData} />
        {/* Recommendations */}
        <ListMovies
          data={recommendations}
          title="Recommendations"
          fetchType="recommendations"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backdrop: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    padding: 16,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tagline: {
    color: colors.differentColor,
    fontSize: 16,
    fontStyle: "italic",
  },
  details: {
    padding: 16,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  overview: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 4,
  },
});

export default MovieDetails;
