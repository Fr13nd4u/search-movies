import {MovieSearchFilters, MovieSearchResponse} from "@/entities/movies";

export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "9d60fd2bcec40a4a97961076be3cd784";

const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (filters: MovieSearchFilters): Promise<MovieSearchResponse> => {
    const { query, language, page, includeAdult ,primaryReleaseYear,region,year} = filters;
    const url = new URL(`${BASE_URL}/search/movie`);

    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("query", query);
    url.searchParams.append("language", language);
    url.searchParams.append("include_adult", String(includeAdult));
    if (primaryReleaseYear) {
        url.searchParams.append("primary_release_year", primaryReleaseYear)
    }
    url.searchParams.append("page", String(page));
    url.searchParams.append("region", (region ||""));
    url.searchParams.append("year",(year||""));

    const res = await fetch(url.toString());

    if (!res.ok) throw new Error("Failed to fetch movies");

    return res.json();
};
