import { Card, Image, Text } from "@mantine/core";
import SkillCardProps from "./SkillCardProps.interface";
import { useState } from "react";
import "../../assets/css/style-card.styles.css";

export default function SkillCard({
    skillName,
    skillDescription,
    skillImg,
    onClick,
}: SkillCardProps) {
    const [hover, setHover] = useState(false);
    const hasBlueIcon =
        skillName === "Docker" ||
        skillName === "Kubernetes" ||
        skillName === "Python"
            ? true
            : false;
    const altText = `An image of ${skillName}`;

    return (
        <Card
            shadow="sm"
            sx={{
                width: "10rem",
                height: "10rem",
                ":hover": {
                    backgroundColor: "#0664F0",
                    cursor: "pointer",
                    border: "none",
                },
            }}
            className="skill-grid--skill-card"
            radius="xl"
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
            <Text align="center" sx={{ fontWeight: 500 }}>
                {skillName}
            </Text>
            <Image
                maw={"75%"}
                mx="auto"
                radius="md"
                src={skillImg}
                alt={altText}
                sx={{
                    paddingTop: "0.5rem",
                    filter:
                        hover && hasBlueIcon
                            ? "brightness(100) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"
                            : "",
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
