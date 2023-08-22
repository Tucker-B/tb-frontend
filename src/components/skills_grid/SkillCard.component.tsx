import { Card, Image, Text, Transition, useMantineTheme } from "@mantine/core";
import SkillModal from "./SkillModal.component";
import SkillCardProps from "./SkillCardProps.interface";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function SkillCard({
    skillName,
    skillDescription,
    skillImg,
    onClick,
}: SkillCardProps) {
    const [hover, setHover] = useState(false);
    const altText = `An image of ${skillName}`;
    const theme = useMantineTheme();

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
            onMouseOver={() => {
                setHover(true);
            }}
            onMouseOut={() => {
                setHover(false);
            }}
        >
            <Text align="center">{skillName}</Text>
            <Image
                maw={"75%"}
                mx="auto"
                radius="md"
                src={skillImg}
                alt={altText}
                sx={{
                    paddingTop: "0.5rem",
                    filter: hover ? "invert(48%)" : "",
                }}
                withPlaceholder
                placeholder={
                    <Text align="center" sx={{ backgroundColor: "#25262b" }}>
                        {altText}
                    </Text>
                }
            />
        </Card>
    );
}
