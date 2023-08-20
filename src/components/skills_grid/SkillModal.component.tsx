import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Text } from "@mantine/core";
import SkillCardProps from "./SkillCardProps.interface";

export default function SkillModal(props: SkillCardProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Modal opened={opened} onClose={close} title={props.skillName} centered>
            <Text>Skill Description: {props.skillDescription}</Text>
            <Text>Skill Img: {props.skillImg}</Text>
        </Modal>
    );
}
