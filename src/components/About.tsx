import React, { useState } from "react";
import anime from "animejs/lib/anime.es.js";
import Loading from "./Loading";
import me_lg from "../img/me_lg.jpg";
const About: React.FC<{}> = () => {
    const [isDoneLoading, setIsDoneLoading] = useState(false);
    return (
        <React.Fragment>
            <div
                className="aboutContainer"
                onLoad={() => {
                    anime({
                        targets: ".aboutContainer",
                        // Properties
                        // Animation Parameters

                        opacity: [
                            {
                                value: [0, 1],
                                duration: 250,
                                easing: "easeOutQuad",
                            },
                        ],
                    });
                    setTimeout(() => setIsDoneLoading(true), 250);
                }}
            >
                <img
                    // src="https://i.scdn.co/image/3a2c1be77c4bc7b915ae55b0dcb6edb3d488eebf"
                    src={me_lg}
                    alt="artist"
                />
                <div className="aboutFade"></div>
                <div className="artistAboutTextWrap">
                    <h1> 50,981,396 monthly listeners</h1>
                    <p>Matthew Francis. Computer Science Student.</p>
                </div>
                <div
                    className="loadingCenter"
                    style={
                        isDoneLoading
                            ? { display: "none" }
                            : { display: "flex" }
                    }
                >
                    <Loading />
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
