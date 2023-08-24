import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
    Center,
    Image,
    Modal,
    Group,
    Stack,
    Text,
    CSSObject,
} from "@mantine/core";

import SkillModalProps from "./SkillModalProps.interface";

export default function SkillModal({
    opened,
    close,
    skillName,
    skillDescription,
    skillImg,
}: SkillModalProps) {
    return (
        <Modal
            opened={opened}
            onClose={close}
            title={skillName}
            sx={{ border: "1px", borderColor: "#116aee" }}
            centered
        >
            <Center>
                <Stack>
                    <Image maw={"10rem"} mx="auto" src={skillImg}>
                        Skill Img: {skillImg}
                    </Image>

                    <Text
                        align="left"
                        sx={{
                            paddingTop: "2rem",
                            paddingBottom: "2rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                        }}
                    >
                        {skillDescription}
                    </Text>
                </Stack>
            </Center>
        </Modal>
    );
}
