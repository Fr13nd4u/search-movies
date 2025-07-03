"use client"

import {FC} from 'react';

import styles from "./result-movies.module.scss"
import {createBem} from "@/shared/lib";
import MoviesGrid from "./movies-grid";
import {useMovieSearch} from "@/entities/movies";

const ResultMovies:FC = () => {
    const bem = createBem("result-movies", styles);
    const bem_progress = createBem("progress-bar", styles);

    const { isLoading, totalItems } = useMovieSearch();

    return (
        <section className={bem()}>
            {isLoading && (
                <div className={bem_progress()} id="progressBar">
                    <div className={bem_progress("fill")}></div>
                </div>
            )}

            <div className={bem("header")}>
                <h2 className={bem("title")}>Search Results</h2>
                <span className={bem("count")} id="resultsCount">{totalItems} movies found</span>
            </div>

            <MoviesGrid />
        </section>
);
};

export default ResultMovies;
