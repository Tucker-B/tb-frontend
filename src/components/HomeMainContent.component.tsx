import { Center, Container, Card, Stack, Title } from "@mantine/core";
import GreetingCard from "./GreetingCard.component";
import SkillsGrid from "./skills_grid/SkillsGrid.component";

export default function HomeMainContent() {
    return (
        <Container>
            <GreetingCard />
            <SkillsGrid />
        </Container>
    );
}
