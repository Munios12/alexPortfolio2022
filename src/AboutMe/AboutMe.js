import React from "react";
import "./aboutme_styles.scss";

export const AboutMe = () => {
    return (
        <>
            <section className="sectionAbout" id="aboutMe">
                <h1 className="sectionAbout__title">About Me</h1>
                <div className="sectionAbout__textContainer">
                    <p className="sectionAbout__bio bio1">
                        Encantado de que estes aquí. Mi nombre es Alejandro y
                        estoy estudiando programacion web en ISDI Coders
                        Academy. Mis inicios en la programacion web se remontan
                        a 2020 debido a un sentimiento de reorientacion de mi
                        vida. A pesar de mi carrera como
                        <span className="sectionAbout__resaltedBio">
                            {" "}
                            geologo
                        </span>
                        , siempre he tenido la incertidumbre de si eso era lo
                        que realmente quería.
                    </p>
                    <p className="sectionAbout__bio bio2">
                        Me introduje gracias a dos amigos que se dedican a la
                        programacion web. Ello me llevó a estudiar primero
                        Python pero rápipademente ya estaba estudiando HTML, CSS
                        y JS. Comencé con cursos en Udemy que recuerdo con mucho
                        cariño, especialmente los de
                        <span className="sectionAbout__resaltedBio">
                            {" "}
                            Jonas Schmedtmann
                        </span>
                        . Justo ahí fue donde realicé mis primeros proyectos
                        personales.
                    </p>
                    <p className="sectionAbout__bio bio3">
                        Mas adelante, una vez ya tenia una buena base, comencé
                        con React. Varios de los proyectos que hice por
                        entonces, los econtrarás en este portfolio. Supe que el
                        siguiente paso, pasaba por estudiar un bootcamp.
                        Actualmente estoy en
                        <span className="sectionAbout__resaltedBio">
                            {" "}
                            busqueda activa de trabajo
                        </span>
                        .
                    </p>
                    <p className="sectionAbout__bio">
                        Estos son algunas de las tecnologías que más domino:
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
