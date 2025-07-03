import {genreMap} from "@/shared/const";

export function getGenreNames(
    genreIds: number[],
): string[] {
    return genreIds.map(id => genreMap[id]).filter(Boolean);
}
