import { Card, Center, Stack, Title } from "@mantine/core";
export default function GreetingCard() {
    return (
        <Center>
            <Card shadow="sm" padding="lg" radius="xl" withBorder>
                <Stack p="md" align="center" sx={{ gap: "0" }}>
                    <Title
                        sx={{
                            fontWeight: 400,
                            fontFamily: "K2D, sans-serif",
                            fontSize: "4rem",
                        }}
                        order={3}
                    >
                        Hey,
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
                        I'm Tucker.
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
                        I build software for <br />
                        distributed systems using
                    </Title>
                </Stack>
            </Card>
        </Center>
    );
}
