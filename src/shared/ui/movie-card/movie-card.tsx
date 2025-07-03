"use client"

import React from 'react';
import {createBem, getGenreNames} from "@/shared/lib";
import styles from "./movie-card.module.scss"
import {MovieCardProps} from "./movie-card.types";
import {genreMap} from "@/shared/const";

const MovieCard: React.FC<MovieCardProps> = ({
     title,
     posterPath,
     rating,
     releaseYear,
     overview,
     genres,
 }) => {
    const bem = createBem("movie-card", styles);

    const genreNames = getGenreNames(genres)

    return (
        <div className={bem()}>
            <div className={bem("poster")}>
                {posterPath ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                        alt={title}
                    />
                ) : (
                    <div className={bem("placeholder")}>🎬</div>
                )}
                <div className={bem("rating")}>{rating.toFixed(1)}</div>
            </div>

            <div className={bem("info")}>
                <h3 className={bem("title")}>{title}</h3>
                {releaseYear && (<div className={bem("year")}>{new Date(releaseYear).getFullYear()}</div>)}
                <p className={bem("overview")}>{overview}</p>
                <div className={bem("genres")}>
                    {genreNames.map((genre) => (
                        <span key={genre} className={bem("genre")}>
                          {genre}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
