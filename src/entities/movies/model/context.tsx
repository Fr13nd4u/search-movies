"use client"

import React, { createContext, useContext, useState, useCallback } from "react";
import { Movie, MovieSearchFilters } from "./types";
import { searchMovies } from "@/entities/movies";

interface MovieSearchContextValue {
    movies: Movie[];
    isLoading: boolean;
    filters: MovieSearchFilters;
    totalPages: number;
    totalItems: number;
    search: (filters: MovieSearchFilters) => void;

}

const MovieSearchContext = createContext<MovieSearchContextValue | undefined>(undefined);

// Provides movie search state and logic to all children components
// Manages movies list, loading status, filters, pagination, and search action
export const MovieSearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    // Current applied search filters
    const [filters, setFilters] = useState<MovieSearchFilters>({
        query: "",
        language: "en-US",
        page: 1,
        includeAdult: false,
    });

    // Loading indicator for API requests
    const [isLoading, setIsLoading] = useState(false);

    // Pagination info: total pages and total items matching the query
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    // Performs movie search with given filters and updates states accordingly
    const search = useCallback(async (newFilters: MovieSearchFilters) => {
        try {
            setIsLoading(true);
            const data = await searchMovies(newFilters);
            setMovies(data.results);
            setFilters(newFilters);
            setTotalPages(data.total_pages);
            setTotalItems(data.total_results)
        } catch (error) {
            console.error("Movie search error:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <MovieSearchContext.Provider value={{ movies, isLoading, filters, totalPages,totalItems, search }}>
            {children}
        </MovieSearchContext.Provider>
    );
};

export const useMovieSearch = (): MovieSearchContextValue => {
    const context = useContext(MovieSearchContext);
    if (!context) {
        throw new Error("useMovieSearch must be used within a MovieSearchProvider");
    }
    return context;
};
