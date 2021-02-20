import React from "react";
import anime from "animejs/lib/anime.es.js";

const About: React.FC<{}> = () => {
    return (
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
            }}
        >
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
