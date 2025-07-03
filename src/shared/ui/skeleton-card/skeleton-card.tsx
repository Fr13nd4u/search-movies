import React from 'react';
import {createBem} from "@/shared/lib";
import styles from "./skeleton-card.module.scss";

const SkeletonCard = () => {
    const bem = createBem("skeleton-card", styles);
    return (
        <div className={bem()}>
            <div className={bem("poster")}></div>
            <div className={bem("info")}>
                <div className={bem("line", "title")}></div>
                <div className={bem("line", "year")}></div>
                <div className={bem("line", "overview")}></div>
                <div className={bem("line", "overview")}></div>
                <div className={bem("line", "overview")}></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
