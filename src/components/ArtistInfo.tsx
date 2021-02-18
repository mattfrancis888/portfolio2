import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import FadeIn from "react-fade-in";
import giphy from "../img/giphy.gif";
import linkedin from "../img/linkedin.gif";
import linkedin_lg from "../img/linkedin_lg.png";
const ArtistInfo: React.FC<{}> = (props) => {
    const [isSongsImageLoaded, setIsSongsImageLoaded] = useState(false);
    const [isBannerImageLoaded, setIsBannerImageLoaded] = useState(false);
    // const renderHeader = (): JSX.Element => {
    //     if (props.artists.length === 0) return <Header artistName="" />;
    //     else
    //         return (
    //             <Header
    //                 artistName={`${props.artists[0].firstName} ${props.artists[0].lastName}`}
    //             />
    //         );
    // };
    const renderBannerAndName = (): JSX.Element | JSX.Element[] => {
        return (
            <div className="bannerContainer">
                <img
                    style={
                        !isBannerImageLoaded
                            ? { opacity: "0" }
                            : { opacity: "1" }
                    }
                    // src="https://i.scdn.co/image/cb843e45099dccf0fa4d6f4071e82603843547cb"
                    src="https://i.scdn.co/image/cc14b787191d396685818c6b2f6d53737257cc2e"
                    alt="artist's banner"
                    onLoad={() => {
                        setTimeout(() => setIsBannerImageLoaded(true), 1000);
                    }}
                ></img>
                <h1 className="artistFullName">Matthew Francis</h1>
            </div>
        );
    };

    const renderSongs = (): JSX.Element | JSX.Element[] => {
        return (
            <div className="songImageContainer">
                <h1>Hello</h1>
            </div>
        );
    };

    const renderDisco = (): JSX.Element | JSX.Element[] => {
        return (
            <div>
                <div className="discoContainer">
                    <div className="discoImageAndOverviewWrap">
                        <div className="discoImageContainer">
                            {/* <img src={linkedin} alt="proj-pic" /> */}
                            <picture>
                                <source
                                    media="(min-width:992px)"
                                    srcSet={linkedin_lg}
                                />
                                <source
                                    media="(min-width:320px)"
                                    srcSet={linkedin}
                                />
                                <img src={linkedin_lg} alt="Flowers" />
                            </picture>
                        </div>
                        <div className="discoOverviewWrap">
                            <h2 className="discoTitle">Linkedin</h2>
                            <h2 className="discoStack">
                                GraphQL, Apollo (v2.6), React, Express
                            </h2>
                        </div>
                    </div>
                    <p>
                        Linkedin-like site where users can see other user's
                        profiles and see what companies they work for. The user
                        can also create their profile. Built to understand how
                        GraphQL is more suitable than RESTful Routing when data
                        is strongly related to each other.
                    </p>
                </div>
            </div>
        );
    };

    return (
        <React.Fragment>
            {/* {renderHeader()} */}
            <div className="artistContainer">
                {renderBannerAndName()}
                <div className="popularSongsAndDiscoWrap">
                    <h2 className="popularSongsTitle">Popular Songs</h2>
                    {/* {!isSongsImageLoaded && (
                        <FadeIn>
                            <SongsPlaceholder />
                        </FadeIn>
                    )} */}
                    <div
                        className="songsListWrap"
                        style={
                            !isSongsImageLoaded
                                ? { display: "none" }
                                : { display: "block" }
                        }
                        onLoad={() => {
                            setTimeout(() => setIsSongsImageLoaded(true), 1000);
                        }}
                    >
                        {renderSongs()}
                    </div>
                </div>
                <div className="popularSongsAndDiscoWrap">
                    <h2 className="discoTitle">Discography</h2>
                    <div className="discoListWrap">{renderDisco()}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ArtistInfo;
