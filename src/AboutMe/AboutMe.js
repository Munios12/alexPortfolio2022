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
                        a 2020 debido a un sentimiento reorientacion de mi vida.
                        A pesar de que soy Geologo, siempre he tenido la
                        incertidumbre de si eso era lo que realmente queria.
                    </p>
                    <p className="sectionAbout__bio bio2">
                        Me introduje gracias a dos amigos que se dedican a
                        programar. Ello me llevo a estudiar primero Python pero
                        rapipademente ya estaba estudiando HTML, CSS y JS.
                        Comencé con cursor en Udemy que recuerdo con mucho
                        cariño. Ahi fue donde realice mis primeros proyectos
                        personales.
                    </p>
                    <p className="sectionAbout__bio bio3">
                        Mas adelante, una vez ya tenia una buena base, comence
                        con React. Varios de los proyectos que hice entonces,
                        los econtraras en este portfolio. Supe que el siguiente
                        paso, pasaba por estudiar un bootcamp. Actualmente estoy
                        en
                        <span className="sectionAbout__resaltedBio">
                            {" "}
                            busqueda activa de trabajo
                        </span>
                        .
                    </p>
                </div>

                <ul>
                    <li>Javascript (ES6+)</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Redux</li>
                    <li>SCSS</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                </ul>
            </section>
        </>
    );
};
