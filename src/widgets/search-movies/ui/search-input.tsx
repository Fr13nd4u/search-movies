"use client"

import {FC, useState, ChangeEvent} from 'react';
import {createBem, getGenreNames,useDebouncedCallback} from "@/shared/lib";
import styles from "./search-movies.module.scss";
import {useMovieSearch} from "@/entities/movies";

const SearchInput:FC = () => {
    const bem = createBem("search", styles);
    const bem_autocomplete = createBem("autocomplete", styles);

    const [searchText, setSearchText] = useState("");

    const { search, filters ,movies,isLoading} = useMovieSearch();
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const debouncedSearch = useDebouncedCallback((query: string) => {
        search({ ...filters, query, page: 1 });
    }, 400);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchText(newValue);
        debouncedSearch(newValue);
    };

    return (
        <div className={bem("container")}>
            <input
                type="text"
                className={bem("input")}
                placeholder="Search for movies..."
                id="movieSearch"
                value={searchText}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            {searchText && isFocused && <div className={bem_autocomplete("dropdown")} id="autocompleteDropdown">
                {!isLoading && movies.map((movie) => (
                    <div key={movie.id} className={bem_autocomplete("item")}>
                            {movie.poster_path ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                                    alt={movie.title}
                                    className={bem_autocomplete("poster")}
                                />
                            ) : (
                                <div className={bem_autocomplete("poster")}>
                                </div>
                            )}

                        <div className={("info")}>
                            <h4>{movie.title}</h4>
                            <p> {movie.release_date
                                ? new Date(movie.release_date).getFullYear()
                                : "Unknown year"}{" "}
                                • {getGenreNames(movie.genre_ids)?.join(", ")}</p>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default SearchInput;
