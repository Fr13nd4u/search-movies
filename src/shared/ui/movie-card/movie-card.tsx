"use client"

import React from 'react';
import { useRouter } from "next/navigation";
import {createBem, getGenreNames} from "@/shared/lib";
import styles from "./movie-card.module.scss"
import {MovieCardProps} from "./movie-card.types";

const MovieCard: React.FC<MovieCardProps> = ({
     id,
     title,
     posterPath,
     rating,
     releaseYear,
     overview,
     genres,
 }) => {
    const bem = createBem("movie-card", styles);
    const router = useRouter();

    const handleClick = () => {
        router.push(`/movies/${id}`);
    };
    const genreNames = getGenreNames(genres)

    return (
        <div className={bem()}  onClick={handleClick}>
            <div className={bem("poster")}>
                {posterPath ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                        alt={title}
                    />
                ) : (
                    <div className={bem("placeholder")}>🎬</div>
                )}
                <div className={bem("rating")}>{rating?.toFixed(1)}</div>
            </div>

            <div className={bem("info")}>
                <h3 className={bem("title")}>{title}</h3>
                {releaseYear && (<div className={bem("year")}>{new Date(releaseYear).getFullYear() || ""}</div>)}
                <p className={bem("overview")}>{overview}</p>
                <div className={bem("genres")}>
                    {genreNames?.map((genre) => (
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
