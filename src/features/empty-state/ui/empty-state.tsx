import React from 'react';
import styles from "./empty-state.module.scss"
import {createBem} from "@/shared/lib";

const EmptyState = () => {
    const bem = createBem("empty-state", styles);

    return (
        <div className={bem()}>
            <h3>No movies found</h3>
            <p>Try searching with different keywords or check your spelling.</p>
        </div>
    );
};

export default EmptyState;
