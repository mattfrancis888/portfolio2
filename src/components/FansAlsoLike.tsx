import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import useWindowDimensions from "../windowDimensions";
import anime from "animejs/lib/anime.es.js";
import thomasRhett from "../img/thomasRhett.jpg";
import chainsmokers from "../img/chainsmokers.jpg";
import taylorSwift from "../img/taylorSwift.jpg";
import martinGarrix from "../img/martinGarrix.jpg";
import edSheeran from "../img/edSheeran.jpg";
import jCole from "../img/jCole.jpg";
import { useTransition, animated, useSpring, useTrail } from "react-spring";
const artistData = [
    {
        name: `Thomas Rhett`,
        profileImg: thomasRhett,
        link: "https://open.spotify.com/artist/6x2LnllRG5uGarZMsD4iO8",
    },
    {
        name: `The Chain- smokers`,
        profileImg: chainsmokers,
        link: "https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp",
    },
    {
        name: `Taylor Swift`,
        profileImg: taylorSwift,
        link: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
    },
    {
        name: `Martin Garrix`,
        profileImg: martinGarrix,
        link: "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ",
    },
    {
        name: `Ed Sheeran`,
        profileImg: edSheeran,
        link: "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
    },
    {
        name: `J. Cole`,
        profileImg: jCole,
        link: "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
    },
];
const FansAlsoLike: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    const [isDoneLoading, setIsDoneLoading] = useState(false);
    const [startOtherArtistsTrail, setStartOtherArtistsTrail] = useState(false);

    const otherArtistsTrail = useTrail(artistData.length, {
        transform: startOtherArtistsTrail
            ? `translate3d(0px,0px,0px)`
            : `translate3d(0px,100px,0px)`,

        config: {
            duration: 250,
        },
    });

    useEffect(() => {
        setStartOtherArtistsTrail(true);
    }, []);
    const renderArtists = (): JSX.Element | JSX.Element[] => {
        return otherArtistsTrail.map((animation, index) => {
            return (
                <animated.div
                    key={index}
                    style={animation}
                    className="fansAlsoLikeArtistAndAppearsOnContainer"
                >
                    <a
                        href={artistData[index].link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            className={`artistCircle artistCircle${index}`}
                            onLoad={() => {
                                anime({
                                    targets: `.artistCircle${index}`,
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
                                src={artistData[index].profileImg}
                                alt="artist"
                            />
                        </div>

                        <h1>
                            {artistData[index].profileImg === chainsmokers &&
                            width > 400
                                ? "The Chainsmokers"
                                : artistData[index].name}
                        </h1>
                        <h3>Artist</h3>
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
                className="fansAlsoLikeArtistsWrap"
                onLoad={() => {
                    anime({
                        targets: ".fansAlsoLikeArtistsWrap",
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
                {renderArtists()}
            </div>
        </React.Fragment>
    );
};

export default FansAlsoLike;
