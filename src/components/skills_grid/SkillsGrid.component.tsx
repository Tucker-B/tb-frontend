import { Button, Card, Group, Modal, SimpleGrid, Text } from "@mantine/core";
import SkillCard from "./SkillCard.component";
import { useDisclosure } from "@mantine/hooks";
import SkillModal from "./SkillModal.component";
import { useState } from "react";

export default function SkillsGrid() {
    const [opened, { open, close }] = useDisclosure(false);
    const [currentSkillName, setCurrentSkillName] = useState("");
    const [currentSkillDescription, setCurrentSkillDescription] = useState("");
    const [currentSkillImg, setCurrentSkillImg] = useState("");

    const setSkills = (
        skillName: string,
        skillDescription: string,
        skillImg: string
    ): void => {
        setCurrentSkillName(skillName);
        setCurrentSkillDescription(skillDescription);
        setCurrentSkillImg(skillImg);
        open();
    };
    return (
        <Group
            align="center"
            sx={{ justifyContent: "center" }}
            style={{ marginTop: "3rem" }}
        >
            {/* <Modal opened={opened} onClose={close} title="Authentication">
                <Text>Hello!</Text>
            </Modal> */}
            <SkillModal
                opened={opened}
                close={close}
                skillName={currentSkillName}
                skillDescription={currentSkillDescription}
                skillImg={currentSkillImg}
            ></SkillModal>
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
                    onClick={setSkills}
                />

                <SkillCard
                    skillName="Java"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Python"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="JavaScript"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Docker"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Kubernetes"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Jenkins"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="AWS"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="GCP"
                    skillDescription="Blank"
                    skillImg=""
                    onClick={setSkills}
                />
            </SimpleGrid>
        </Group>
    );
}
