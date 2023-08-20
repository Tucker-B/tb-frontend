import { Card, Text } from "@mantine/core";
import SkillModal from "./SkillModal.component";
import SkillCardProps from "./SkillCardProps.interface";
import { useDisclosure } from "@mantine/hooks";

export default function SkillCard(props: SkillCardProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const showSkillModal = () => {
        return (
            <SkillModal
                skillName={props.skillName}
                skillDescription={props.skillDescription}
                skillImg={props.skillImg}
            />
        );
    };
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
            onClick={showSkillModal}
        >
            <Text align="center">{props.skillName}</Text>
        </Card>
    );
}
