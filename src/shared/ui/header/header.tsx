import {FC} from 'react';
import {createBem} from "@/shared/lib";
import styles from "./header.module.scss"

const Header:FC = () => {
    const bem = createBem("header", styles);

    return (
        <header className={bem()}>
            <h1>TMDB Movie Search</h1>
            <p>Find your favorite movies with powerful search and autocomplete</p>
        </header>
    );
}

export default Header;
