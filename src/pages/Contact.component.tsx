import ContactMainContent from "../components/contact/ContactMainContent.component";
import FadeInTransition from "../components/FadeInTransition.component";

export default function Contact() {
    //return <ContactMainContent></ContactMainContent>;
    return (
        <FadeInTransition>
            <ContactMainContent></ContactMainContent>
        </FadeInTransition>
    );
}
