import React from "react";
import "./works_styles.scss";

export const Works = () => {
    return (
        <>
            <section className="sectionWorks" id="works">
                <h1 className="sectionWorks__title">Works</h1>
                <ul className="works__projectList">
                    <li className="work1">
                        <div className="work1__card">
                            <p>Personal Project</p>
                            <h5>GAMING SHARE</h5>

                            <div className="work1__card-description">
                                <p>
                                    Bootcamp final project. In Gaming Share
                                    users can register and login. Explore a
                                    videogame list with game-details coming from
                                    RAWG API, save them to their favourite list
                                    and leave a comment.
                                </p>
                            </div>
                            <div className="work1__card-links">
                                <a
                                    className="work1__card-applink"
                                    href="https://github.com/Munios12/gamingshare"
                                >
                                    <i class="devicon-github-original"></i>
                                </a>

                                <a
                                    className="work1__card-applink"
                                    href="https://gamingshare.vercel.app/"
                                >
                                    Visit here
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};
