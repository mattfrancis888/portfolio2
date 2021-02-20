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
    const renderPlaylists = (): JSX.Element | JSX.Element[] => {
        return playlistData.map((playlist, index) => {
            return (
                <div
                    key={index}
                    className="fansAlsoLikeArtistAndAppearsOnContainer"
                >
                    <a
                        href={playlist.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="playlistImg">
                            <img src={playlist.playlistImg} alt="artist" />
                        </div>
                        <h1>{playlist.name}</h1>
                        <h3>Playlist</h3>
                    </a>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
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
                    setTimeout(() => setIsDoneLoading(true), 250);
                }}
            >
                {renderPlaylists()}
            </div>
            <div
                className="loadingCenter"
                style={
                    isDoneLoading ? { display: "none" } : { display: "flex" }
                }
            >
                <Loading />
            </div>
        </React.Fragment>
    );
};

export default AppearsOn;
