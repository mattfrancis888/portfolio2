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
import taylorSwift from "../img/taylorSwift.jpg";
import martinGarrix from "../img/martinGarrix.jpg";
import edSheeran from "../img/edSheeran.jpg";
import jCole from "../img/jCole.jpg";
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
const FansALsoLike: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    const renderArtists = (): JSX.Element | JSX.Element[] => {
        return artistData.map((artist, index) => {
            return (
                <div key={index} className="fansAlsoLikeArtistContainer">
                    <a
                        href={artist.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="artistCircle">
                            <img src={artist.profileImg} alt="artist" />
                        </div>
                        <h1>
                            {artist.profileImg === chainsmokers && width > 400
                                ? "The Chainsmokers"
                                : artist.name}
                        </h1>
                        <h3>Artist</h3>
                    </a>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            <div className="fansAlsoLikeArtistsWrap">{renderArtists()}</div>
        </React.Fragment>
    );
};

export default FansALsoLike;
