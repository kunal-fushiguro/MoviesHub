interface CardsTypes {
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

interface CardsTypesTwo {
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

type RootStackParamList = {
  Home: undefined;
  MoviesDetails: { id: number };
  PersonDetails: { id: number };
  SerachScreen: undefined;
  AllMoviesList: { typeName: string };
};

interface CastDetails {
  name: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
  homepage: string;
  profile_path: string;
}

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

export { CardsTypes, CardsTypesTwo, RootStackParamList, CastDetails, actor };
