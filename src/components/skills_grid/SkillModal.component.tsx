import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Center, Image, Modal, Group, Stack, Text } from "@mantine/core";

import SkillModalProps from "./SkillModalProps.interface";

export default function SkillModal({
    opened,
    close,
    skillName,
    skillDescription,
    skillImg,
}: SkillModalProps) {
    return (
        <Modal opened={opened} onClose={close} title={skillName}>
            <Center>
                <Stack>
                    <Image maw={"10rem"} mx="auto" src={skillImg}>
                        Skill Img: {skillImg}
                    </Image>

                    <Text align="center">{skillDescription}</Text>
                </Stack>
            </Center>
        </Modal>
    );
}
