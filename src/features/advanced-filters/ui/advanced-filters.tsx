"use client"

import {FC,useState,useEffect, ChangeEvent} from 'react';
import styles from "./advanced-filters.module.scss"
import {createBem} from "@/shared/lib";
import {useMovieSearch} from "@/entities/movies";
import {languages, regions} from "@/features/advanced-filters";

interface FiltersState {
    language: string;
    primaryReleaseYear: string;
    year: string;
    region: string;
    page: string;
    includeAdult: boolean;
}

const AdvancedFilters:FC = () => {
    const bem = createBem("advanced-filters", styles);
    const [showFilters, setShowFilters] = useState(false);
    const { filters: contextFilters, search } = useMovieSearch();

    const [filters, setFilters] = useState<FiltersState>({
        language: contextFilters.language,
        primaryReleaseYear: "",
        year: "",
        region: "",
        page: String(contextFilters.page ?? 1),
        includeAdult: contextFilters.includeAdult,
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value, type } = e.target;

        const newValue =
            type === "checkbox" && "checked" in e.target
                ? (e.target as HTMLInputElement).checked
                : value;

        setFilters((prev) => {
            const updated = { ...prev, [id]: newValue };
            return updated;
        });
    };

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };

    useEffect(() => {
        search({
            ...contextFilters,
            ...filters,
            page: Number(filters.page),
        });
    }, [filters,contextFilters,search]);

    return (
        <div className={bem()}>
            <button className={bem("toggle")} onClick={toggleFilters}>
                {showFilters ? "🔼 Hide Advanced Options" : "🔽 Advanced Search Options"}
            </button>

            {showFilters && (
                <div className={bem("content")}>
                    <div className={bem("field")}>
                        <label className={bem("label")}>Language</label>
                        <select
                            className={bem("select")}
                            id="language"
                            value={filters.language}
                            onChange={handleChange}
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={bem("field")}>
                        <label className={bem("label")}>Release Year</label>
                        <input
                            type="number"
                            className={bem("input")}
                            id="primaryReleaseYear"
                            value={filters.primaryReleaseYear}
                            onChange={handleChange}
                            placeholder="e.g. 2024"
                            min={1900}
                            max={2030}
                        />
                    </div>

                    <div className={bem("field")}>
                        <label className={bem("label")}>Year</label>
                        <input
                            type="number"
                            className={bem("input")}
                            id="year"
                            value={filters.year}
                            onChange={handleChange}
                            placeholder="e.g. 2024"
                            min={1900}
                            max={2030}
                        />
                    </div>

                    <div className={bem("field")}>
                        <label className={bem("label")}>Region</label>
                        <select
                            className={bem("select")}
                            id="region"
                            value={filters.region}
                            onChange={handleChange}
                        >
                            {regions.map((region) => (
                                <option key={region.code} value={region.code}>
                                    {region.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={bem("field")}>
                        <label className={bem("label")}>Page</label>
                        <input
                            type="number"
                            className={bem("input")}
                            id="page"
                            value={filters.page}
                            onChange={handleChange}
                            placeholder="1"
                            min={1}
                            max={1000}
                        />
                    </div>

                    <div className={bem("field")}>
                        <label className={bem("label")}>Content Filter</label>
                        <div className={bem("checkbox-field")}>
                            <input
                                type="checkbox"
                                id="includeAdult"
                                checked={filters.includeAdult}
                                onChange={handleChange}
                            />
                            <label htmlFor="includeAdult">Include Adult Content</label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdvancedFilters;
