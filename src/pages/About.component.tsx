import AboutMainContent from "../components/about/AboutMainContent.component";
import FadeInTransition from "../components/FadeInTransition.component";

export default function About() {
    return (
        <FadeInTransition>
            <AboutMainContent></AboutMainContent>
        </FadeInTransition>
    );
}
