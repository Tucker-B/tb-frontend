import { Badge, Card, Center, Group, Stack, Text, Title } from "@mantine/core";
import WorkCardProps from "./WorkCardProps.interface";

export default function WorkCard({
    companyName,
    jobTitle,
    industry,
    skills,
    description,
}: WorkCardProps) {
    return (
        <Center>
            <Card
                title={companyName}
                padding="lg"
                shadow="sm"
                radius="xl"
                sx={{ width: "60%", height: "20%" }}
            >
                <Group position="center" sx={{ width: "100%" }}>
                    <Title
                        order={2}
                        align="center"
                        sx={{ paddingBottom: "0.5rem" }}
                    >
                        {companyName}
                    </Title>
                    <Stack
                        align="center"
                        sx={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            paddingTop: "1rem",
                            paddingRight: "2rem",
                            gap: "0.5rem",
                        }}
                    >
                        <Badge color="blue">{industry}</Badge>

                        {skills.map((skill) => {
                            return (
                                <Badge color={skill.color}>{skill.name}</Badge>
                            );
                        }, null)}
                    </Stack>
                </Group>

                <Title
                    order={3}
                    align="center"
                    sx={{ paddingBottom: "2rem", color: "#116aee" }}
                >
                    {jobTitle}
                </Title>
                {description}
            </Card>
        </Center>
    );
}
