import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Center, Modal, Group, Text } from "@mantine/core";

import SkillModalProps from "./SkillModalProps.interface";

export default function SkillModal({
    opened,
    close,
    skillName,
    skillDescription,
    skillImg,
}: SkillModalProps) {
    return (
        <Modal opened={opened} onClose={close} title={skillName} centered>
            <Center>
                <Text>Skill Description: {skillDescription}</Text>
                <Text>Skill Img: {skillImg}</Text>
            </Center>
        </Modal>
    );
}
