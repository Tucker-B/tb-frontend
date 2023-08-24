import { Card, Center, Stack, Title } from "@mantine/core";
export default function GreetingCard() {
    return (
        <Center>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Stack p="md" align="center" sx={{ gap: "0" }}>
                    <Title
                        sx={{
                            fontWeight: 400,
                            fontFamily: "Montserrat, sans-serif",
                        }}
                        order={3}
                    >
                        Hey, I'm
                    </Title>
                    <Title
                        sx={{
                            fontWeight: "bolder",
                            fontFamily: "Montserrat, sans-serif",
                            color: "#116aee",
                        }}
                        order={1}
                    >
                        Tucker Barton
                    </Title>
                    <Title
                        sx={{
                            fontWeight: 400,
                            fontFamily: "Montserrat, sans-serif",
                            paddingTop: "1.5rem",
                        }}
                        order={3}
                        align="center"
                    >
                        I build software for <br />
                        distributed systems using
                    </Title>
                </Stack>
            </Card>
        </Center>
    );
}
