import React from "react";

const About: React.FC<{}> = () => {
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
