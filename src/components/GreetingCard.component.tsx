import { Card, Center, Stack, Sx, Title } from "@mantine/core";
import GreetingCardProp from "./GreetingCardProps.interface";
export default function GreetingCard({
    firstLine,
    name,
    description,
}: GreetingCardProp) {
    return (
        <Center>
            <Card padding="lg" sx={{ backgroundColor: "#f8f9fa" }}>
                <Stack
                    p="md"
                    align="center"
                    sx={{ gap: "0" }}
                    style={{ paddingTop: "0", paddingBottom: "0" }}
                >
                    <Title
                        sx={{
                            fontWeight: 400,
                            fontFamily: "K2D, sans-serif",
                            fontSize: "4rem",
                        }}
                        order={3}
                    >
                        {firstLine}
                    </Title>
                    <Title
                        sx={{
                            fontWeight: "bolder",
                            fontFamily: "K2D, sans-serif",
                            color: "#116aee",
                            fontSize: "6rem",
                            lineHeight: "0.75",
                        }}
                        order={1}
                    >
                        {name}
                    </Title>
                    <Title
                        sx={{
                            fontWeight: 400,
                            fontFamily: "Montserrat, sans-serif",
                            paddingTop: "2rem",
                        }}
                        order={3}
                        align="center"
                    >
                        {description}
                    </Title>
                </Stack>
            </Card>
        </Center>
    );
}
