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
import { FaPlay } from "react-icons/fa";
import linkedin from "../img/linkedin.gif";
import linkedin_lg from "../img/linkedin_lg.png";
import kijiji from "../img/kijiji.png";
import kijijiLg from "../img/kijiji_lg_2.png";
import multiDocker from "../img/multi_docker.png";
import multiDockerLg from "../img/multi_docker_lg.png";
import auth from "../img/auth.jpg";
import authLg from "../img/auth_lg.jpg";
import dreamworks from "../img/dreamworks.png";
import dreamworksLg from "../img/dreamworks_lg_2.png";
import spotify from "../img/spotify.png";
import spotifyLg from "../img/spotify_lg.jpg";
import appStore from "../img/app_store.png";
import appStoreLg from "../img/app_store_lg.png";
import pixar from "../img/pixar.png";
import pixarLg from "../img/pixar_lg.jpg";
import musicStream from "../img/music_stream.png";
import musicStreamLg from "../img/music_stream_lg.gif";
import tmdb from "../img/tmdb.jpg";
import tmdbLg from "../img/tmdb_lg.jpg";
import uo from "../img/uo.png";
import uoLg from "../img/uo_lg.jpg";
import giphy from "../img/giphy.png";
import giphyLg from "../img/giphy_lg.gif";
import airbnbLg from "../img/airbnb_lg.png";
import growingUp from "../img/growingUp.jpg";
import me2 from "../img/me2.jpg";
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
const discoData = [
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
        img: multiDocker,
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
        in BCNF (Boyce Codd Normal Form; database diagram is
        shown in README). Authentication is done via cookies
        that stores access tokens and refresh tokens (JWTs);
        users can create, edit, delete a listing, and see
        all listings by other users. Data is stored on
        PostgreSQL.`,
        img: kijiji,
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
        img: auth,
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
        img: dreamworks,
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
        img: spotify,
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
        img: appStore,
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
        img: pixar,
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
        img: linkedin,
        imgLg: linkedin_lg,
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
        img: musicStream,
        imgLg: musicStreamLg,
        demo: `https://music-stream.now.sh/`,
        github: `https://github.com/mattfrancis888/music-stream`,
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
        img: tmdb,
        imgLg: tmdbLg,
        demo: `https://mattfrancis888.github.io/the_movie_db/`,
        github: `https://github.com/mattfrancis888/the_movie_db`,
    },
    {
        title: `Urban Outfitters`,
        stack: `React, Bootstrap`,
        description: `Replicated Urban Outfitters's site. Created it to
        familiarize with React, HTML, CSS, Bootstrap.`,
        img: uo,
        imgLg: uoLg,
        demo: `https://urban-outfitters.now.sh/`,
        github: `https://github.com/mattfrancis888/Urban-Outfitters`,
    },
    {
        title: `Giphy`,
        stack: `React, Bootstrap`,
        description: `Replicated Giphy's site. Used their API to display
        gifs. Created it to familiarize with API calls.`,
        img: giphy,
        imgLg: giphyLg,
        demo: `https://giphy.mattfrancis888.vercel.app/`,
        github: `https://github.com/mattfrancis888/giphy`,
    },
    {
        title: `Airbnb Android App`,
        stack: `Java, Express, MySQL`,
        description: `Replicated Airbnb's site. Created Android App with
        Java. Built API to store and retrieve data from app
        with Node.JS and Express. Used MySQL as database.`,
        img: airbnbLg,
        imgLg: airbnbLg,
        github: `https://github.com/mattfrancis888/Airbnb`,
        githubAPI: `https://github.com/mattfrancis888/Airbnb-API`,
    },
];

const ArtistInfo: React.FC<{}> = () => {
    const [showMore, setShowMore] = useState(false);

    const [showContactDetails, setShowContactDetails] = useState(false);
    const [isBannerImageLoaded, setIsBannerImageLoaded] = useState(false);
    const { width } = useWindowDimensions();

    const popularSong1 = useRef<HTMLLinkElement>(null);
    const popularSong2 = useRef<HTMLLinkElement>(null);
    const popularSong3 = useRef<HTMLLinkElement>(null);

    const [popularSong1Clicked, setPopularSong1Clicked] = useState(false);
    const [popularSong2Clicked, setPopularSong2Clicked] = useState(false);
    const [popularSong3Clicked, setPopularSong3Clicked] = useState(false);

    useEffect(() => {
        if (popularSong1 !== null && popularSong1Clicked) {
            popularSong1.current?.scrollIntoView({ behavior: "smooth" });
            setPopularSong1Clicked(false);
        }

        if (popularSong2 !== null && popularSong2Clicked) {
            popularSong2.current?.scrollIntoView({ behavior: "smooth" });
            setPopularSong2Clicked(false);
        }

        if (popularSong3 !== null && popularSong3Clicked) {
            popularSong3.current?.scrollIntoView({ behavior: "smooth" });
            setPopularSong3Clicked(false);
        }
    }, [popularSong1Clicked, popularSong2Clicked, popularSong3Clicked]);

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
                <div className="fullNameAndMonthlyListenerWrap">
                    <h1 className="artistFullName">Matthew Francis</h1>
                    <h3 className="monthlyListeners">
                        50,981,396 monthly listeners
                    </h3>
                </div>
            </div>
        );
    };

    const renderSongs = (): JSX.Element | JSX.Element[] => {
        return (
            <React.Fragment>
                <div
                    className="song"
                    onClick={() => {
                        setPopularSong1Clicked(true);
                        setShowMore(true);
                    }}
                >
                    <div className="songIconAndTitleWrap">
                        <FaPlay className="playAndMusicalNoteicon musicalnoteIcon" />
                        <IoMdMusicalNotes className="playAndMusicalNoteicon" />
                        <h1>Kijiji</h1>
                    </div>
                    <p className="songLength">2:01</p>
                </div>
                <div
                    className="song"
                    onClick={() => {
                        setPopularSong2Clicked(true);
                        setShowMore(true);
                    }}
                >
                    <div className="songIconAndTitleWrap">
                        <FaPlay className="playAndMusicalNoteicon musicalnoteIcon" />
                        <IoMdMusicalNotes className="playAndMusicalNoteicon" />
                        <h1>Dreamworks</h1>
                    </div>
                    <p className="songLength">3:30</p>
                </div>
                <div
                    className="song"
                    onClick={() => {
                        setPopularSong3Clicked(true);
                        setShowMore(true);
                    }}
                >
                    <div className="songIconAndTitleWrap">
                        <FaPlay className="playAndMusicalNoteicon musicalnoteIcon" />
                        <IoMdMusicalNotes className="playAndMusicalNoteicon" />
                        <h1>Pixar</h1>
                    </div>
                    <p className="songLength">4:01</p>
                </div>
            </React.Fragment>
        );
    };

    const renderDisco = (): JSX.Element | JSX.Element[] => {
        return discoData.map((disco, index) => {
            return (
                <div key={index} className={`discoContainer`}>
                    {disco.title === "Kijiji" && (
                        <span
                            className="invisibleSpan"
                            ref={popularSong1}
                        ></span>
                    )}
                    {disco.title === "Dreamworks" && (
                        <span
                            className="invisibleSpan"
                            ref={popularSong2}
                        ></span>
                    )}
                    {disco.title === "Pixar" && (
                        <span
                            className="invisibleSpan"
                            ref={popularSong3}
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
                            {/* <div
                                className={`discoImageAnimeWrap discoImageAnimeWrap${index}`}
                                onLoad={() => {
                                    // anime({
                                    //     targets: `.squarePlaceholder${index}`,
                                    //     width: `0`,
                                    //     height: `0`,
                                    //     duration: 250,
                                    // });
                                    anime({
                                        targets: `.discoImageAnimeWrap${index}`,
                                        // Properties
                                        // Animation Parameters

                                        opacity: [
                                            {
                                                value: [0, 1],
                                                duration: 2500,
                                                easing: "easeOutQuad",
                                            },
                                        ],
                                         width: `100%`,
                                        height: `100%`,
                                    });
                                }}
                            > */}
                            <picture
                                className={`discoPicture discoPicture${index}`}
                            >
                                <source
                                    media={`(min-width:${LG_SCREEN_SIZE}px)`}
                                    srcSet={disco.imgLg}
                                />
                                <source
                                    media={`(min-width:${XS_SCREEN_SIZE}px)`}
                                    srcSet={disco.img}
                                />
                                <img src={disco.imgLg} alt="project" />
                            </picture>
                        </div>
                        {/* <div
                                className={`squarePlaceholder squarePlaceholder${index}`}
                            >
                                <SquarePlaceholder
                                    className={`squarePlaceholder `}
                                />
                            </div> */}
                        {/* </div> */}

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
                        <h2 className="artistInfoSectionTitle">
                            Popular Songs
                        </h2>
                        {renderSongs()}
                    </div>
                    <div className="artistPickContainer">
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
                    </div>
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
