import { Card, Text } from "@mantine/core";
import SkillModal from "./SkillModal.component";
import SkillCardProps from "./SkillCardProps.interface";
import { useDisclosure } from "@mantine/hooks";

export default function SkillCard({
    skillName,
    skillDescription,
    skillImg,
    onClick,
}: SkillCardProps) {
    return (
        <Card
            shadow="xs"
            sx={{
                width: "10rem",
                height: "10rem",
                ":hover": {
                    backgroundColor: "#0664F0",
                    cursor: "pointer",
                    border: "none",
                },
            }}
            radius="md"
            withBorder
            onClick={() => {
                onClick(skillName, skillDescription, skillImg);
            }}
        >
            <Text align="center">{skillName}</Text>
        </Card>
    );
}
