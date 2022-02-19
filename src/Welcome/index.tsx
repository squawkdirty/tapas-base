import React from "react";
import { Logo } from "../Logo";
import "./styles.scss";
import { Tile } from "./Tile";

const applications = ["assess", "modify", "study", "draw"]

export const Welcome: React.FC = () => {

    return <div className="welcome-container">
        <Logo />
        <div id="cards">
            {applications.map(category => <Tile category={category} key={category} />)}
        </div>
    </div>
}