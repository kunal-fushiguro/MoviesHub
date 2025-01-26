import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "@/types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { moviesLists } from "@/api";
import LoadingScreen from "@/components/LoadingScreen";
import ErrorComponent from "@/components/Error";
import MoviesListVertically from "@/components/MoviesListVertically";
import { colors } from "@/theme/theme";

const AllMoviesList = () => {
  const route = useRoute<RouteProp<RootStackParamList, "AllMoviesList">>();
  const { fetchType } = route.params;
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading } = useQuery({
    queryKey: [fetchType, page],
    queryFn: () => moviesLists(fetchType, page),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    <ErrorComponent />;
  }

  if (data != undefined) {
    return (
      <ScrollView>
        <View style={style.container}>
          {/* <Text>AllMoviesList {fetchType}</Text> */}
          {/* list the moviesList */}
          <MoviesListVertically data={data} title={fetchType} />
        </View>
      </ScrollView>
    );
  }
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.background,
  },
});

export default AllMoviesList;
