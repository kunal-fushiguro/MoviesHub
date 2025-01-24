import CastList from "@/components/CastList";
import ListMovies from "@/components/MoviesList";
import { credits, oneMovie, recommendation } from "@/temp/tempdata";
import { colors } from "@/theme/theme";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

type RootStackParamList = {
  Home: undefined;
  MoviesDetails: { id: number };
};

interface MovieDetails {
  title: string;
  backdrop_path: string;
  poster_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  tagline: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  revenue: number;
  production_companies: {
    name: string;
    origin_country: string;
  }[];
}

const MovieDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, "MoviesDetails">>();
  const { id } = route.params;
  const [movie, setMovie] = useState<MovieDetails>(oneMovie);

  return (
    <ScrollView style={styles.container}>
      {/* Backdrop Image */}
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={styles.backdrop}
      />
      {/* Poster and Title */}
      <View style={styles.header}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={styles.poster}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.tagline}>{movie.tagline}</Text>
        </View>
      </View>
      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overview}>{movie.overview}</Text>

        <Text style={styles.sectionTitle}>Genres</Text>
        <Text style={styles.text}>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </Text>

        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.text}>Release Date: {movie.release_date}</Text>
        <Text style={styles.text}>Runtime: {movie.runtime} mins</Text>
        <Text style={styles.text}>
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </Text>
        <Text style={styles.text}>
          Revenue: ${movie.revenue.toLocaleString()}
        </Text>

        <Text style={styles.sectionTitle}>Production Companies</Text>
        {movie.production_companies.map((company, index) => (
          <Text key={index} style={styles.text}>
            {company.name} ({company.origin_country})
          </Text>
        ))}
      </View>
      {/* Cast Lists */}
      <CastList cast={credits.cast} />
      {/* Recommendations */}
      <ListMovies data={recommendation.results} title="Recommendations" />
    </ScrollView>
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
