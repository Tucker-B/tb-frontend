import { useEffect, useState } from "react";
import { Container, Transition } from "@mantine/core";
import GreetingCard from "../GreetingCard.component";
import SkillsGrid from "./skills_grid/SkillsGrid.component";

export default function HomeMainContent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMounted(true);
        }, 250);
    }, []);

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
