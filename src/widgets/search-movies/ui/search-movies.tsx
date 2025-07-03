import {FC} from 'react';
import {createBem} from "@/shared/lib";
import styles from "./search-movies.module.scss";
import SearchInput from "./search-input";
import {AdvancedFilters} from "@/features/advanced-filters";

const SearchMovies:FC = () => {
    const bem = createBem("search-section", styles);

    return (
        <section className={bem()}>
            <SearchInput />
            <AdvancedFilters />
        </section>
    );
};

export default SearchMovies;
