import React, { useEffect, useState } from "react";
import spotify from "../img/spotify_logo.png";
import { useHistory } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
interface HeaderProps {
    artistName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    const history = useHistory();
    const [artistNameVisibility, setArtistName] = useState("artistNameHide");

    const listenScrollEvent = () => {
        if (window.scrollY < 73) {
            return setArtistName("artistNameHide");
        } else if (window.scrollY > 70) {
            return setArtistName("artistNameOnScroll");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <nav className="headerContianer">
            <div
                className="spotifyLogoContainer"
                onClick={() => {
                    history.push("/");
                }}
                onLoad={() => {
                    anime({
                        targets: `.spotifyLogoContainer`,
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
                <img src={spotify} alt="spotify logo" />
            </div>
            <h1 className={artistNameVisibility}>{props.artistName}</h1>
        </nav>
    );
};

export default Header;
