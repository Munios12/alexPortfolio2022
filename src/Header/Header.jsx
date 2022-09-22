import React, { Fragment, useEffect, useState } from "react";
import "./header_styles.scss";

export const Header = () => {
    const [hamAnim, setHamAnim] = useState(true);
    const [isHidden, setIsHidden] = useState(true);

    const showAnim = () => {
        const hamburguer = document.querySelector(".header__nav");
        const section = document.querySelector(".section");
        const asideMenu = document.querySelector(".aside__menu");
        const body = document.querySelector("body");
        setHamAnim(!hamAnim);
        setIsHidden(!isHidden);

        if (hamAnim) {
            hamburguer.classList.add("active");
            section.classList.add("is-cristal");
            asideMenu.classList.remove("hidden");
        } else {
            hamburguer.classList.remove("active");
            section.classList.remove("is-cristal");
            asideMenu.classList.add("hidden");
        }

        if (isHidden) {
            asideMenu.style.visibility = "visible";
            asideMenu.style.transform = "translateX(0vw)";
            body.style.overflow = "hidden";
        } else {
            asideMenu.style.visibility = "hidden";
            asideMenu.style.transform = "translateX(100vw)";
            body.style.overflow = "scroll";
        }
    };

    const handleAnchorTags = () => {
        const hamburguer = document.querySelector(".header__nav");
        const asideMenu = document.querySelector(".aside__menu");
        const body = document.querySelector("body");
        const section = document.querySelector(".section");
        const about = document.querySelector(".about a");

        setHamAnim(!hamAnim);
        setIsHidden(!isHidden);

        if (hamAnim) {
            hamburguer.classList.add("active");
            section.classList.add("is-cristal");
            asideMenu.classList.remove("hidden");
        } else {
            hamburguer.classList.remove("active");
            section.classList.remove("is-cristal");
            asideMenu.classList.add("hidden");
        }

        if (isHidden) {
            asideMenu.style.visibility = "visible";
            asideMenu.style.transform = "translateX(0vw)";
            body.style.overflow = "hidden";
        } else {
            asideMenu.style.visibility = "hidden";
            asideMenu.style.transform = "translateX(100vw)";
            body.style.overflow = "scroll";
        }
    };

    return (
        <>
            <header className="header" id="home">
                <h1 className="header__title">Ñ</h1>

                <button onClick={showAnim} className="header__nav">
                    <div className="nav__hamburguer-menu"></div>
                    <div className="nav__hamburguer-menu"></div>
                    <div className="nav__hamburguer-menu"></div>
                </button>
                <aside className="aside__menu" ishidden="false">
                    <nav className="aside__nav">
                        <ol className="asideMenu__list">
                            <li className="list__item home">
                                <a href="#home" onClick={handleAnchorTags}>
                                    Home
                                </a>
                            </li>
                            <li className="list__item about">
                                <a href="#aboutMe" onClick={handleAnchorTags}>
                                    About
                                </a>
                            </li>
                            <li className="list__item works">
                                <a href="#works" onClick={handleAnchorTags}>
                                    Works
                                </a>
                            </li>
                            <li className="list__item contact">
                                <a href="#">Contact</a>
                            </li>
                        </ol>
                        <a className="falseButton-asideMenu">Curriculum</a>
                    </nav>
                </aside>
            </header>
            <section className="section">
                <h1 className="section__title">Hi, my name is</h1>
                <h2 className="section__myname">Alejandro Muñoz Navarro</h2>
                <h3 className="section__profesion">
                    A junior frontend developer.
                </h3>
                <p className="section__bio">
                    Studying web programming in ISDI Coders Academy. I love
                    build and design modern apps & websites. Currently I'm
                    working on my
                    <span className="bio__word"> portfolio</span> adding it new
                    and modern projects.
                </p>
                <div className="falseButton">
                    <p className="falseButton__text" onClick={handleAnchorTags}>
                        All about me!
                    </p>
                </div>
            </section>
        </>
    );
};
