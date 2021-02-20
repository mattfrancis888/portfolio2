import React from "react";
import useWindowDimensions from "../windowDimensions";
import {
    LG_SCREEN_SIZE,
    SM_SCREEN_SIZE,
    MD_SCREEN_SIZE,
    XS_SCREEN_SIZE,
} from "../constants";
import thomasRhett from "../img/thomasRhett.jpg";
import chainsmokers from "../img/chainsmokers.jpg";

const About: React.FC<{}> = () => {
    const { width } = useWindowDimensions();

    return (
        <div className="aboutContainer">
            <img
                src="https://i.scdn.co/image/3a2c1be77c4bc7b915ae55b0dcb6edb3d488eebf"
                alt="artist"
            />
            <div className="aboutFade"></div>
            <div className="artistAboutTextWrap">
                <h1> 50,981,396 monthly listeners</h1>
                <p>Matthew Francis. Computer Science Student.</p>
            </div>
        </div>
    );
};

export default About;
