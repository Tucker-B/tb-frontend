import { Container, Text } from "@mantine/core";
import GreetingCard from "../GreetingCard.component";

export default function ContactMainContent() {
    return (
        <Container>
            <GreetingCard
                firstLine=""
                name={<Text sx={{}}>Get In Touch</Text>}
                description=""
            ></GreetingCard>
        </Container>
    );
}
