import { Container } from "@mantine/core";
import GreetingCard from "../GreetingCard.component";
import SkillsGrid from "./skills_grid/SkillsGrid.component";

export default function HomeMainContent() {
    return (
        <Container>
            <GreetingCard
                firstLine="Hey,"
                name="I'm Tucker."
                description="I build software for distributed systems using"
            />
            <SkillsGrid />
        </Container>
    );
}
