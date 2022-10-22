import React from "react";
import "./aboutme_styles.scss";

export const AboutMe = () => {
    return (
        <>
            <section className="sectionAbout" id="aboutMe">
                <h1 className="sectionAbout__title">About Me</h1>
                <div className="sectionAbout__textContainer">
                    <p className="sectionAbout__bio bio1">
                        Welcome to my portfolio. Im Alejandro, self-taught and
                        student in ISDI Coders academy. I started to learn code
                        in 2020 as soon I had a reorientation feeling about my
                        profesional career. Despite my
                        <span className="sectionAbout__resaltedBio">
                            {" "}
                            Geology{" "}
                        </span>
                        degree, I've always have doubts about my future.
                    </p>
                    {/* 
                        Welcome to my portfolio. Im Alejandro, self-taught and student in ISDI Coders academy.
                        I started web dev in 2020 as soon I had a reorientation feeling about my profesional career. Despite 
                        my Geology degree, i've always have doubts about my future. 

                        Two friends of mine introduce me in web dev. I realise that I was really happy doing this
                        so I started my self-taught travel, starting with Python, then HTML, CSS and JS.
                        Starting with cheapers courses at Udemy that I fondly remember, especially those from 
                        Jonas. when I started my very first personal projects.

                        Later, as my fundamentals was established, I started learning React. 
                        I liked a lot so I decided to starting a bootcamp in ISDI Coders. Check my last project in this portfolio and follow me in social media.

                        Currently Im looking for a job.


                    */}
                    <p className="sectionAbout__bio bio2">
                        Two friends of mine introduce me in web dev. Liked a
                        lot, so I take a few online courses of Python then HTML,
                        CSS and JS. I fondly remember Udemy courses, especially
                        those from
                        <span className="sectionAbout__resaltedBio">
                            {" "}
                            Jonas Schmedtmann
                        </span>
                        . Thats the exact point when I choose this as my future
                        profesional career.
                    </p>
                    <p className="sectionAbout__bio bio3">
                        Later, as my fundamentals was established, I started
                        learning React. On September I've finished a bootcamp in
                        <span className="sectionAbout__resaltedBio">
                            {" "}
                            ISDI Coders Academy.{" "}
                        </span>
                        Currently looking for a job.
                    </p>
                    <p className="sectionAbout__bio">
                        I feel very comfortable working with this technologies:
                    </p>
                </div>

                <ul className="technologies-list">
                    <li className="tech-1">
                        <i className="devicon-javascript-plain colored"></i>
                    </li>
                    <li>
                        <i className="devicon-react-original-wordmark colored"></i>
                    </li>
                    <li>
                        <i className="devicon-nodejs-plain-wordmark colored"></i>
                    </li>
                    <li>
                        <i className="devicon-redux-original colored"></i>
                    </li>
                    <li>
                        <i className="devicon-sass-original colored"></i>
                    </li>
                    <li>
                        <i className="devicon-firebase-plain-wordmark colored"></i>
                    </li>
                    <li>
                        <i className="devicon-mongodb-plain-wordmark colored"></i>
                    </li>
                </ul>
                <div className="photo-container">
                    <img
                        width={270}
                        height={270}
                        src={require("../images/alehandro.jpg")}
                    />
                </div>
            </section>
        </>
    );
};
