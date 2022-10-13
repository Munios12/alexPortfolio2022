import { AboutMe } from "./AboutMe/AboutMe";
import "./App_styles.scss";
import { Contact } from "./Contact/Contact";
import { Header } from "./Header/Header";
import { Works } from "./Works/Works";

function App() {
    return (
        <>
            <Header />
            <AboutMe />
            <Works />
            <Contact />
        </>
    );
}

export default App;
