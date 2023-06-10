import BigText from "./BigText/bigtext";
import Features from "./features/features";
function Home() {
    return (
        <>
        <BigText />
        <Features />
        </>
    );
}

function About() {
    return (
        <>
        <h1>About</h1>
        </>
    );
}

function Achievements() {
    return (
        <>
        <h1>Achievements</h1>
        </>
    );
}

function Roadmap() {
    return (
        <>
        <h1>Roadmap</h1>
        </>
    );
}

function Notes() {
    return (
        <>
        <h1>Notes</h1>
        </>
    );
}

function Contact() {
    return (
        <>
        <h1>Contact</h1>
        </>
    );
}

export default function Content({ currentPage}) {
    var content;
    switch (currentPage) {
        case "home":
        content = <Home />;
        break;
        case "about":
        content = <About />;
        break;
        case "achievements":
        content = <Achievements />;
        break;
        case "roadmap":
        content = <Roadmap />;
        break;
        case "notes":
        content = <Notes />;
        break;
        case "contact":
        content = <Contact />;
        break;
        default:
        content = <Home />;
        break;
    }
    return (
        <>
        {content}
        </>
    );
    
}