import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";
import Header from "./Header";
import Loading from "./Loading";
import useWindowDimensions from "../windowDimensions";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMusicalNotes } from "react-icons/io";
import { FaDiscord, FaPlay } from "react-icons/fa";
import linkedinLg from "../img/linkedin_lg.jpg";
import lowResLinkedInlg from "../img/lowRes/low_res_linkedin_lg.jpg";
import kijijiLg from "../img/kijiji_lg.jpg";
import lowResKijijiLg from "../img/lowRes/low_res_kijiji_lg.jpg";
import multiDockerLg from "../img/multi_docker_lg.jpg";
import lowResMultiDockerLg from "../img/lowRes/low_res_multi_docker_lg.jpg";
import authLg from "../img/auth_lg.jpg";
import lowResAuthLg from "../img/lowRes/low_res_auth_lg.jpg";
import dreamworksLg from "../img/dreamworks_lg.jpg";
import lowResDreamworksLg from "../img/lowRes/low_res_dreamworks_lg.jpg";
import spotifyLg from "../img/spotify_lg.jpg";
import lowResSpotifyLg from "../img/lowRes/low_res_spotify_lg.jpg";
import lowResAppStoreLg from "../img/lowRes/low_res_app_store_lg.jpg";
import appStoreLg from "../img/app_store_lg.jpg";
import pixarLg from "../img/pixar_lg.jpg";
import lowResPixarLg from "../img/lowRes/low_res_pixar_lg.jpg";
import musicStreamLg from "../img/music_stream_lg.jpg";
import lowResMusicStreamLg from "../img/lowRes/low_res_music_stream_lg.jpg";
import tmdbLg from "../img/tmdb_lg.jpg";
import lowResTmdbLg from "../img/lowRes/low_res_tmdb_lg.jpg";
import uoLg from "../img/uo_lg.jpg";
import lowResUoLg from "../img/lowRes/low_res_uo_lg.jpg";
import giphyLg from "../img/giphy_lg.jpg";
import lowResGiphyLg from "../img/lowRes/low_res_giphy_lg.jpg";
import airbnbLg from "../img/airbnb_lg.jpg";
import lowResAirbnbLg from "../img/lowRes/low_res_airbnb_lg.jpg";
import growingUp from "../img/growingUp.jpg";
import me2 from "../img/me2.jpg";
import netflixLg from "../img/netflix_lg.jpg";
import lowResNetflixLg from "../img/lowRes/low_res_netflix_lg.jpg";
import steamLg from "../img/steam_lg.jpg";
import lowResSteamLg from "../img/lowRes/low_res_steam_lg.jpg";
import {
    XS_SCREEN_SIZE,
    LG_SCREEN_SIZE,
    SM_SCREEN_SIZE,
    MD_SCREEN_SIZE,
} from "../constants";
import FansAlsoLike from "./FansAlsoLike";
import About from "./About";
import AppearsOn from "./AppearsOn";
import SquarePlaceholder from "./SquarePlaceholder";
import BlurredUpImage from "./BlurredUpImage";
import { useTransition, animated, useSpring, useTrail } from "react-spring";
const discoData = [
    {
        title: `Steam`,
        stack: `Boyce Codd Normal Form database on
        PostgreSQL, React, Redux, Express, Typescript,
        React-Testing-Library, TravisCI`,
        description: `Replication of Steam website, the largest video game retailer for PC games.
         Database is created in BCNF (Boyce Codd Normal Form); database diagram is
         shown in README. Authentication is done via cookies
          that stores access tokens and refresh tokens (JWTs); users can search for games,
          including games that are on sale; users can post, delete, edit their reviews;
        edit their profile and username; add games to their cart. Data is stored on PostgreSQL.`,
        lowResLg: lowResSteamLg,
        imgLg: steamLg,
        demo: `https://steam-project-matt.herokuapp.com/`,
        github: `https://github.com/mattfrancis888/steam`,
    },
    {
        title: `Netflix`,
        stack: `Boyce Codd Normal Form database on
        PostgreSQL, React, Redux, Express, Typescript,
        React-Testing-Library, TravisCI`,
        description: `Replication of Netflix website. Database is created
        in BCNF (Boyce Codd Normal Form); database diagram is
        shown in README. Authentication is done via cookies
        that stores access tokens and refresh tokens (JWTs);
        users can add and remove titles to their watchlist; and
        users can search for titles. Data is stored on
        PostgreSQL.`,
        lowResLg: lowResNetflixLg,
        imgLg: netflixLg,
        demo: `https://netflix-project.herokuapp.com/`,
        github: `https://github.com/mattfrancis888/netflix`,
    },
    {
        title: ` Multi-Docker`,
        stack: `Docker, AWS Elastic Beanstalk,
        TravisCI, React, PostgreSQL, Express,
        React-Testing-Library`,
        description: `A single-page app that shows the categories available for a Kijiji Listing.
        Used the same database from a previous project, Kijiji. Built to understand Docker, AWS
        infrastructure (eg: EC2, S3, RDS, VPS, Security
        Groups, etc), the deployment process to AWS Elastic
        Beanstalk, and CI/CD flow.`,
        lowResLg: lowResMultiDockerLg,
        imgLg: multiDockerLg,
        demo: `https://multi-docker.vercel.app/`,
        github: `https://github.com/mattfrancis888/multi-docker`,
    },
    {
        title: `Kijiji`,
        stack: `Boyce Codd Normal Form database on
                PostgreSQL, React, Redux, Express, Typescript,
                React-Testing-Library`,
        description: `Replication of Kijiji website. Database is created
                in BCNF (Boyce Codd Normal Form); database diagram is
                shown in README. Authentication is done via cookies
                that stores access tokens and refresh tokens (JWTs);
                users can create, edit, delete a listing, and see
                all listings by other users. Data is stored on
                PostgreSQL.`,
        lowResLg: lowResKijijiLg,
        imgLg: kijijiLg,
        demo: `https://kijiji-project.herokuapp.com/`,
        github: `https://github.com/mattfrancis888/kijiji`,
    },
    {
        title: `Authentication Project`,
        stack: `MongoDB, Mongoose, Express,
        Typescript, React, Redux, React-Testing-Library`,
        description: `When users are logged in, they can listen to Peter
        Quil's 'walkman' songs (From Guardians of The
        Galaxy). Built to understand authentication. User
        email and password are stored in MongoDB. Used JWT
        and localstorage as authentication method.`,
        lowResLg: lowResAuthLg,
        imgLg: authLg,
        demo: `https://auth-cyan.vercel.app/`,
        github: `https://github.com/mattfrancis888/auth-project`,
    },
    {
        title: `Dreamworks`,
        stack: `PostgreSQL, Express, Typescript, React,
            Redux, React-Testing-Library`,
        description: `Shows movies from Dreamworks. Movies are stored in
            PostgreSQL. Built to understand SQL queries, and the
            process of integrating PostgreSQL and the front-end.`,
        lowResLg: lowResDreamworksLg,
        imgLg: dreamworksLg,
        demo: `https://dreamworks.vercel.app/`,
        github: `https://github.com/mattfrancis888/dreamworks`,
    },

    {
        title: `Spotify`,
        stack: `MongoDB, Mongoose, Express, Typescript,
        React, Redux, React-Testing-Library`,
        description: `Shows artists from Spotify. Artists' information is
        stored on MongoDB. Built to understand the process
        of integrating MongoDB and the front-end.`,
        lowResLg: lowResSpotifyLg,
        imgLg: spotifyLg,
        demo: `https://spotify.mattfrancis888.vercel.app/`,
        github: `https://github.com/mattfrancis888/spotify`,
    },
    {
        title: `Apple's App Store Review`,
        stack: `React-Testing-Library,
        Enzyme, Typescript, React, Redux, Express`,
        description: `Replicated Apple's App Store Review. Reviews are
        stored in an online JSON database. Built to
        understand unit testing, integration testing, and
        blackbox functional testing.`,
        lowResLg: lowResAppStoreLg,
        imgLg: appStoreLg,
        demo: `https://apple-review.mattfrancis888.vercel.app/`,
        github: `https://github.com/mattfrancis888/apple_review`,
    },
    {
        title: `Pixar`,
        stack: `Typescript, React, Redux, Express`,
        description: `Replicated Pixar site. Films are stored in an online
        JSON database. Film images are stored in Cloudinary.
        Built to understand the benefits and drawbacks of
        Typescript in the React and Redux environment.`,
        lowResLg: lowResPixarLg,
        imgLg: pixarLg,
        demo: `https://pixar-three.vercel.app/`,
        github: `https://github.com/mattfrancis888/pixar`,
    },
    {
        title: `Linkedin`,
        stack: `GraphQL, Apollo (v2.6), React, Express`,
        description: `Linkedin-like site where users can see other user's
        profiles and see what companies they work for. The
        user can also create their profile. Built to
        understand how GraphQL is more suitable than RESTful
        Routing when data is strongly related to each other.`,
        lowResLg: lowResLinkedInlg,
        imgLg: linkedinLg,
        demo: `https://linkedin-phi.vercel.app/`,
        github: `https://github.com/mattfrancis888/linkedin`,
    },
    {
        title: `Music Videos Stream`,
        stack: `Redux, React, Express`,
        description: `Holds collection of Youtube Music Videos. Users can
        create, edit, delete music videos when logged in;
        users can see other published videos when not signed
        in. This is achieved by having a JSON database and
        communicating with REST. Created App to further
        understand how Redux facilitate state management;
        and to learn the benefits of Redux-Thunk,
        Redux-Form, React Hooks, and React Portals.`,
        lowResLg: lowResMusicStreamLg,
        imgLg: musicStreamLg,
        demo: `https://music-stream.now.sh/`,
        github: `https://github.com/mattfrancis888/music-stream`,
    },

    {
        title: `Giphy`,
        stack: `React, Bootstrap`,
        description: `Replicated Giphy's site. Used their API to display
        gifs. Created it to familiarize with API calls.`,
        lowResLg: lowResGiphyLg,
        imgLg: giphyLg,
        demo: `https://giphy.mattfrancis888.vercel.app/`,
        github: `https://github.com/mattfrancis888/giphy`,
    },
    {
        title: `Urban Outfitters`,
        stack: `React, Bootstrap`,
        description: `Replicated Urban Outfitters's site. Created it to
        familiarize with React, HTML, CSS, Bootstrap.`,
        lowResLg: lowResUoLg,
        imgLg: uoLg,
        demo: `https://urban-outfitters.now.sh/`,
        github: `https://github.com/mattfrancis888/Urban-Outfitters`,
    },
    {
        title: `The Movie Database`,
        stack: `HTML, CSS, JS, Webpack`,
        description: `Replicated TMDB's site. Used their API to display
        the movies. Created it to familiarize with building
        a site without any libraries/framework; familiarize
        with webpack; how preprocessors can optimize
        websites; how to optimize websites outside of
        code(such as image compression); familiarize with
        MVC design pattern.`,
        lowResLg: lowResTmdbLg,
        imgLg: tmdbLg,
        demo: `https://mattfrancis888.github.io/the_movie_db/`,
        github: `https://github.com/mattfrancis888/the_movie_db`,
    },
    {
        title: `Airbnb Android App`,
        stack: `Java, Express, MySQL`,
        description: `Replicated Airbnb's android app. Created Android App with
        Java. Built API to store and retrieve data from app
        with Node.JS and Express. Used MySQL as database.`,
        lowResLg: lowResAirbnbLg,
        imgLg: airbnbLg,
        github: `https://github.com/mattfrancis888/Airbnb`,
        githubAPI: `https://github.com/mattfrancis888/Airbnb-API`,
    },
];

const popularSongs = [
    {
        name: "Kijiji",
        length: "2:08",
    },
    {
        name: "Dreamworks",
        length: "3:28",
    },
    {
        name: "Pixar",
        length: "4:01",
    },
];

const ArtistInfo: React.FC<{}> = () => {
    const [showMore, setShowMore] = useState(false);
    const [startSongTrail, setStartSongTrail] = useState(false);
    const nameSpring = useSpring({
        from: {
            transform: "translate3d(0px , 35%, 0px)",
            opacity: 0,
        },
        to: {
            transform: "translate3d(0px , 0px, 0px)",
            opacity: 1,
        },
        config: {
            duration: 1250,
        },
    });
    const popularSongTitleSpring = useSpring({
        from: {
            transform: "translate3d(-100px,0px,0px)",
        },
        to: {
            transform: "translate3d(0px,0px,0px)",
        },
        config: {
            duration: 1000,
        },
    });

    const artistPickSectionSpring = useSpring({
        from: {
            transform: "translate3d(0,100px,0px)",
        },
        to: {
            transform: "translate3d(0px,0px,0px)",
        },
        config: {
            duration: 1000,
        },
    });
    const songTrail = useTrail(popularSongs.length, {
        transform: startSongTrail
            ? `translate3d(0px,0px,0px)`
            : `translate3d(-100px,0px,0px)`,
        opacity: startSongTrail ? 1 : 0,

        config: {
            duration: 1000,
        },
    });

    const [showContactDetails, setShowContactDetails] = useState(false);
    const [isBannerImageLoaded, setIsBannerImageLoaded] = useState(false);
    const [popularSongIndex, setPopularSongIndex] = useState(-1);
    const { width } = useWindowDimensions();

    const itemEls = useRef(new Array());

    useEffect(() => {
        setStartSongTrail(true);
    }, []);
    useEffect(() => {
        if (popularSongIndex > -1)
            itemEls.current[popularSongIndex].scrollIntoView({
                behavior: "smooth",
            });
    }, [popularSongIndex]);

    const renderHeader = (): JSX.Element => {
        return <Header artistName="Matthew Francis" />;
    };
    const renderBannerAndName = (): JSX.Element | JSX.Element[] => {
        return (
            <div className="bannerContainer">
                <img
                    style={
                        !isBannerImageLoaded
                            ? { opacity: "0" }
                            : { opacity: "1" }
                    }
                    // src="https://i.scdn.co/image/cc14b787191d396685818c6b2f6d53737257cc2e"
                    src={me2}
                    alt="artist's banner"
                    onLoad={() => {
                        setTimeout(() => setIsBannerImageLoaded(true), 1000);
                    }}
                ></img>
                <div className="bannerFade"></div>
                <animated.div
                    style={nameSpring}
                    className="fullNameAndMonthlyListenerWrap"
                >
                    <h1 className="artistFullName">Matthew Francis</h1>
                    <h3 className="monthlyListeners">
                        50,981,396 monthly listeners
                    </h3>
                </animated.div>
            </div>
        );
    };

    const renderSongs = (): JSX.Element | JSX.Element[] => {
        return songTrail.map((animation, index) => {
            return (
                <animated.div
                    style={animation}
                    key={index}
                    className="song"
                    onClick={() => {
                        setPopularSongIndex(index);
                        setShowMore(true);
                    }}
                >
                    <div className="songIconAndTitleWrap">
                        <FaPlay className="playAndMusicalNoteicon musicalnoteIcon" />
                        <IoMdMusicalNotes className="playAndMusicalNoteicon" />
                        <h1>{popularSongs[index].name}</h1>
                    </div>
                    <p className="songLength">{popularSongs[index].length}</p>
                </animated.div>
            );
        });
    };

    const renderDisco = (): JSX.Element | JSX.Element[] => {
        return discoData.map((disco, index) => {
            return (
                <div key={index} className={`discoContainer`}>
                    {disco.title === "Kijiji" && (
                        <span
                            className="invisibleSpan"
                            ref={(element) => (itemEls.current[0] = element)}
                        ></span>
                    )}
                    {disco.title === "Dreamworks" && (
                        <span
                            className="invisibleSpan"
                            ref={(element) => (itemEls.current[1] = element)}
                        ></span>
                    )}
                    {disco.title === "Pixar" && (
                        <span
                            className="invisibleSpan"
                            ref={(element) => (itemEls.current[2] = element)}
                        ></span>
                    )}
                    <div className="discoImageAndOverviewWrap">
                        <div
                            className={`discoImageContainer discoImageContainer${index}`}
                            onLoad={() => {
                                anime({
                                    targets: `.discoImageContainer${index}`,

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
                            <BlurredUpImage
                                lowRes={disco.lowResLg}
                                highRes={disco.imgLg}
                            />
                        </div>

                        <div className="discoOverviewWrap">
                            <h2 className="discoTitle">{disco.title}</h2>
                            <h2 className="discoStack">{disco.stack}</h2>
                            <p
                                className={
                                    width > SM_SCREEN_SIZE
                                        ? "showDiscoDesc"
                                        : "hideDiscoDesc"
                                }
                            >
                                {disco.description}
                            </p>
                            {!disco.githubAPI && (
                                <div
                                    className={
                                        width > MD_SCREEN_SIZE
                                            ? "showGitHubAndExternalWrap"
                                            : "hideGitHubAndExternalWrap"
                                    }
                                >
                                    <a
                                        href={disco.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="githubAndExternalIcon" />
                                    </a>
                                    <a
                                        href={disco.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiExternalLink className="githubAndExternalIcon" />
                                    </a>
                                </div>
                            )}

                            {disco.githubAPI && (
                                <div
                                    className={
                                        width > MD_SCREEN_SIZE
                                            ? "showGitHubAndExternalWrap"
                                            : "hideGitHubAndExternalWrap"
                                    }
                                >
                                    <h2>App:</h2>
                                    <a
                                        href={disco.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="githubAndExternalIcon" />
                                    </a>
                                    <h2>API: </h2>
                                    <a
                                        href={disco.githubAPI}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="githubAndExternalIcon" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <p
                        className={
                            width < SM_SCREEN_SIZE
                                ? "showDiscoDesc"
                                : "hideDiscoDesc"
                        }
                    >
                        {disco.description}
                    </p>
                    {!disco.githubAPI && (
                        <div
                            className={
                                width < MD_SCREEN_SIZE
                                    ? "showGitHubAndExternalWrap"
                                    : "hideGitHubAndExternalWrap"
                            }
                        >
                            <a
                                href={disco.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub className="githubAndExternalIcon" />
                            </a>
                            <a
                                href={disco.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink className="githubAndExternalIcon" />
                            </a>
                        </div>
                    )}
                    {disco.githubAPI && (
                        <div
                            className={
                                width < MD_SCREEN_SIZE
                                    ? "showGitHubAndExternalWrap"
                                    : "hideGitHubAndExternalWrap"
                            }
                        >
                            <h2>App:</h2>
                            <a
                                href={disco.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub className="githubAndExternalIcon" />
                            </a>
                            <h2>API: </h2>
                            <a
                                href={disco.githubAPI}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub className="githubAndExternalIcon" />
                            </a>
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            {renderHeader()}
            <div className="artistContainer">
                {renderBannerAndName()}
                <div className="contactButtonWrap">
                    <button
                        className={
                            showContactDetails
                                ? "hideContactButton"
                                : "contactButton"
                        }
                        onClick={() => {
                            setShowContactDetails(true);
                        }}
                    >
                        Contact
                    </button>
                    <div
                        className={
                            showContactDetails
                                ? "contactTextWrap"
                                : "hideContactTextWrap"
                        }
                    >
                        <a
                            className="mailto"
                            href="mailto:mattfrancis888@gmail.com"
                        >
                            <h3 className="contactEmail">
                                Email: mattfrancis888@gmail.com
                            </h3>
                        </a>

                        <h3 className="contactPhone">Phone: 289-772-7465</h3>
                    </div>
                </div>

                <div className="artistInfoAndArtistPickSectionWrap artistInfoSectionWrap">
                    <div className="artistPopularSongsContainer">
                        <animated.h2
                            className="artistInfoSectionTitle"
                            style={popularSongTitleSpring}
                        >
                            Popular Songs
                        </animated.h2>
                        {renderSongs()}
                    </div>
                    <animated.div
                        className="artistPickContainer"
                        style={artistPickSectionSpring}
                    >
                        <h2 className="artistInfoSectionTitle">Artist Pick</h2>
                        <a
                            href="https://open.spotify.com/album/2kqn09pydzvKvB3xWbAxY4?highlight=spotify:track:44T13PWJ87jb3lFElhVIHx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="artistPickInfoWrap">
                                <img
                                    src={growingUp}
                                    alt="song, playlist or album"
                                    onLoad={() => {
                                        anime({
                                            targets: ".artistPickInfoWrap",

                                            opacity: [
                                                {
                                                    value: [0, 1],
                                                    duration: 250,
                                                    easing: "easeOutQuad",
                                                },
                                            ],
                                        });
                                    }}
                                ></img>
                                <div className="artistPickTextWrap">
                                    <h3 className="artistPickTitle">
                                        Growing Up (feat. Ed Sheeran)
                                    </h3>
                                    <p>Song</p>
                                </div>
                            </div>
                        </a>
                    </animated.div>
                </div>

                <div className="artistInfoSectionWrap">
                    <h2 className="artistInfoSectionTitle">Discography</h2>
                    <div className=" artistInfoDiscoWrap">
                        <div className={showMore ? "" : "discoListWrap"}>
                            {renderDisco()}
                            <div className="readMoreFade"></div>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowMore(true)}
                        className={
                            showMore ? "showMoreButtonHide" : "showMoreButton"
                        }
                    >
                        Show More
                    </button>
                </div>

                <LazyLoad
                    width={100}
                    height={100}
                    debounce={false}
                    offsetVertical={500}
                >
                    <div className="artistInfoSectionWrap">
                        <h2 className="artistInfoSectionTitle">
                            Fans Also Like
                        </h2>
                        <FansAlsoLike />
                    </div>
                </LazyLoad>
                <LazyLoad
                    width={100}
                    height={100}
                    debounce={false}
                    offsetVertical={500}
                >
                    <div className="artistInfoSectionWrap">
                        <h2 className="artistInfoSectionTitle">Appears On</h2>
                        <AppearsOn />
                    </div>
                </LazyLoad>

                <LazyLoad
                    width={100}
                    height={100}
                    debounce={false}
                    offsetVertical={500}
                >
                    <div className="artistInfoSectionWrap">
                        <h2 className="artistInfoSectionTitle">About</h2>
                        <About />
                    </div>
                </LazyLoad>
            </div>
        </React.Fragment>
    );
};

export default ArtistInfo;
