import { Card, Group, SimpleGrid, Text } from "@mantine/core";
import SkillCard from "./SkillCard.component";

export default function SkillsGrid() {
    return (
        <Group
            align="center"
            sx={{ justifyContent: "center" }}
            style={{ marginTop: "3rem" }}
        >
            <SimpleGrid
                cols={3}
                sx={{
                    justifyItems: "center",
                    gap: "2.5rem 5rem",
                }}
            >
                <SkillCard
                    skillName="React"
                    skillDescription="Blank"
                    skillImg=""
                />

                <SkillCard
                    skillName="Java"
                    skillDescription="Blank"
                    skillImg=""
                />
                <SkillCard
                    skillName="Python"
                    skillDescription="Blank"
                    skillImg=""
                />
                <SkillCard
                    skillName="JavaScript"
                    skillDescription="Blank"
                    skillImg=""
                />
                <SkillCard
                    skillName="Docker"
                    skillDescription="Blank"
                    skillImg=""
                />
                <SkillCard
                    skillName="Kubernetes"
                    skillDescription="Blank"
                    skillImg=""
                />
                <SkillCard
                    skillName="Jenkins"
                    skillDescription="Blank"
                    skillImg=""
                />
                <SkillCard
                    skillName="AWS"
                    skillDescription="Blank"
                    skillImg=""
                />
                <SkillCard
                    skillName="GCP"
                    skillDescription="Blank"
                    skillImg=""
                />
            </SimpleGrid>
        </Group>
    );
}
