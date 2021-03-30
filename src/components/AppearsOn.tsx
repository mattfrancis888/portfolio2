import React, { useEffect, useState } from "react";
import useWindowDimensions from "../windowDimensions";
import hiphop from "../img/hiphop.jpg";
import country from "../img/country.jpg";
import rnb from "../img/rnb.jpg";
import dance from "../img/dance.jpg";
import alt from "../img/alt.jpg";
import rock from "../img/rock.jpg";
import anime from "animejs/lib/anime.es.js";
import Loading from "./Loading";
import { useTransition, animated, useSpring, useTrail } from "react-spring";

const playlistData = [
    {
        name: `Hot Country`,
        playlistImg: country,
        link: "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda",
    },
    {
        name: `Rock Classics`,
        playlistImg: rock,
        link: "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U",
    },
    {
        name: `Dance Hits`,
        playlistImg: dance,
        link: "https://open.spotify.com/playlist/37i9dQZF1DX0BcQWzuB7ZO",
    },

    {
        name: `Rap Caviar`,
        playlistImg: hiphop,
        link: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
    },
    {
        name: `Alternative 10s`,
        playlistImg: alt,
        link: "https://open.spotify.com/playlist/37i9dQZF1DX873GaRGUmPl",
    },
    {
        name: `Are & Be`,
        playlistImg: rnb,
        link: "https://open.spotify.com/playlist/37i9dQZF1DX4SBhb3fqCJd",
    },
];
const AppearsOn: React.FC<{}> = () => {
    const [isDoneLoading, setIsDoneLoading] = useState(false);
    const [startAppearsOnTrail, setStartAppearsOnTrail] = useState(false);

    const appearsOnTrail = useTrail(playlistData.length, {
        transform: startAppearsOnTrail
            ? `translate3d(0px,0px,0px)`
            : `translate3d(0px,100px,0px)`,

        config: {
            duration: 250,
        },
    });
    useEffect(() => {
        setStartAppearsOnTrail(true);
    }, []);
    const renderPlaylists = (): JSX.Element | JSX.Element[] => {
        return appearsOnTrail.map((animation, index) => {
            return (
                <animated.div
                    style={animation}
                    key={index}
                    className="fansAlsoLikeArtistAndAppearsOnContainer"
                >
                    <a
                        href={playlistData[index].link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            className={`playlistImg playlistImg${index}`}
                            onLoad={() => {
                                anime({
                                    targets: `.playlistImg${index}`,
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
                                src={playlistData[index].playlistImg}
                                alt="artist"
                            />
                        </div>
                        <h1>{playlistData[index].name}</h1>
                        <h3>Playlist</h3>
                    </a>
                </animated.div>
            );
        });
    };

    return (
        <React.Fragment>
            <div
                className="loadingCenter"
                style={
                    isDoneLoading ? { display: "none" } : { display: "flex" }
                }
            >
                <Loading />
            </div>
            <div
                className="appearsOnWrap"
                onLoad={() => {
                    anime({
                        targets: ".appearsOnWrap",
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
                    setTimeout(() => setIsDoneLoading(true), 0);
                }}
            >
                {renderPlaylists()}
            </div>
        </React.Fragment>
    );
};

export default AppearsOn;
