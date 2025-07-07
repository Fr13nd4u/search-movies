"use client"

import React, {FC} from 'react';

import styles from "./result-movies.module.scss"
import {createBem} from "@/shared/lib";
import {MovieCard,SkeletonCard} from "@/shared/ui";
import {EmptyState} from "@/features/empty-state";
import {useMovieSearch} from "@/entities/movies";

const MoviesGrid:FC = () => {
    const bem = createBem("movies-grid", styles);
    const { movies, isLoading } = useMovieSearch();

    return (
        <>
            <div className={bem()}>
                {isLoading && Array.from({ length: 3 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
                {!isLoading && movies?.map((movie)=> (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                        rating={movie.vote_average}
                        releaseYear={movie.release_date}
                        overview={movie.overview}
                        genres={movie.genre_ids}
                    />
                ))}

            </div>
            {!isLoading && !movies.length && <EmptyState />}
        </>
    );
};

export default MoviesGrid;
