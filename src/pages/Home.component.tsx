import HomeMainContent from "../components/home/HomeMainContent.component";
import FadeInTransition from "../components/FadeInTransition.component";

export default function Home() {
    //return <HomeMainContent />;
    return (
        <FadeInTransition>
            <HomeMainContent></HomeMainContent>
        </FadeInTransition>
    );
}
