import React from "react";
import "./styles.scss";

export interface ITile {
    category: string;
}

export const Tile: React.FC<ITile> = (props) => {

    const path = `/logos/${props.category}.svg`
    const title = props.category.toUpperCase();

    return <div className={`tapas-tile-wrap ${props.category}`}>
        <img src={path} className="tapas-tile" alt={props.category}/>
        <text className="tapas-tile-text">{title}</text>
        </div>
}