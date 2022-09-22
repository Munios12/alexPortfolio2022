import { AboutMe } from "./AboutMe/AboutMe";
import "./App_styles.scss";
import { Header } from "./Header/Header";
import { Works } from "./Works/Works";

function App() {
    return (
        <>
            <Header />
            <AboutMe />
            <Works />
        </>
    );
}

export default App;
