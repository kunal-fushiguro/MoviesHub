import { API_KEY } from "@/env";
import { actor, CardsTypes, CardsTypesTwo, CastDetails } from "@/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

async function moviesLists(
  fetchType: "popular" | "now_playing" | "top_rated" | "upcoming",
  page: number
): Promise<CardsTypesTwo[]> {
  const url = `https://api.themoviedb.org/3/movie/${fetchType}?language=en-US&page=${page}`;
  const response = await fetch(url, options);
  const data = await response.json();
  const results: CardsTypesTwo[] = data.results;
  return results;
}

async function movieDetailsData(id: string | number): Promise<CardsTypes> {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const response = await fetch(url, options);
  const data = await response.json();
  const results: CardsTypes = data;
  console.log(results);
  return results;
}

async function moviesCast(id: string | number): Promise<actor[]> {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const response = await fetch(url, options);
  const data = await response.json();

  const results: actor[] = data.cast;

  return results;
}
async function moviesRecommendations(
  id: string | number
): Promise<CardsTypesTwo[]> {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  const response = await fetch(url, options);
  const data = await response.json();
  const results: CardsTypesTwo[] = data.results;
  return results;
}

async function personDetails(id: string | number): Promise<CastDetails> {
  const url = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
  const response = await fetch(url, options);
  const data = await response.json();
  const results: CastDetails = data;
  return results;
}

async function personDetailsWork(
  id: string | number
): Promise<CardsTypesTwo[]> {
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`;
  const response = await fetch(url, options);
  const data = await response.json();
  const results: CardsTypesTwo[] = data.cast;
  return results;
}

async function searchMovies(searchText: string) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
  const response = await fetch(url, options);
  const data = await response.json();
  const results: CardsTypesTwo[] = data.results;
  return results;
}

export {
  moviesLists,
  movieDetailsData,
  moviesCast,
  moviesRecommendations,
  personDetails,
  personDetailsWork,
  searchMovies,
};
