import WorkMainContent from "../components/work/WorkMainContent.component";
import FadeInTransition from "../components/FadeInTransition.component";

export default function Work() {
    return (
        <FadeInTransition>
            <WorkMainContent></WorkMainContent>
        </FadeInTransition>
    );
}
