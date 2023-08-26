import { Card, Container, Group, Text, Title } from "@mantine/core";
import GreetingCard from "../GreetingCard.component";

export default function ContactMainContent() {
    return (
        <Container>
            <GreetingCard
                firstLine=""
                name={
                    <Text sx={{ fontFamily: "K2D, sans-serif" }}>
                        Get In Touch
                    </Text>
                }
                description=""
            ></GreetingCard>
            <Group position="center" align="center">
                <Card
                    title="Phone"
                    padding="lg"
                    shadow="sm"
                    radius="xl"
                    sx={{ width: "30%", height: "20%" }}
                >
                    <Title
                        align="center"
                        order={2}
                        sx={{ paddingBottom: "0.5rem" }}
                    >
                        Phone
                    </Title>
                    <Text align="center">
                        <a
                            href="tel:+14049008032"
                            style={{ textDecoration: "none" }}
                        >
                            +1 (404) 900-8032
                        </a>
                    </Text>
                </Card>
                <Card
                    title="Email"
                    padding="lg"
                    shadow="sm"
                    radius="xl"
                    sx={{ width: "30%", height: "20%" }}
                >
                    <Title
                        align="center"
                        order={2}
                        sx={{ paddingBottom: "0.5rem" }}
                    >
                        Email
                    </Title>
                    <Text align="center">
                        <a
                            href="mailto:tuckergbarton@gmail.com"
                            style={{ textDecoration: "none" }}
                        >
                            tuckergbarton@gmail.com
                        </a>
                    </Text>
                </Card>
            </Group>
        </Container>
    );
}
