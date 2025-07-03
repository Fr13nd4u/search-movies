export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string | null;
    vote_average: number;
    genre_ids: number[];
}

export interface MovieSearchFilters {
    query: string;
    language: string;
    page: number;
    includeAdult: boolean;
    region?: string;
    year?: string;
    primaryReleaseYear?: string;
}

export interface MovieSearchResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
