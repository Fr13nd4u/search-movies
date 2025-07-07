export interface MovieCardProps {
    id: number
    title: string;
    posterPath?: string | null;
    rating: number;
    releaseYear: string;
    overview: string;
    genres: number[];
}
