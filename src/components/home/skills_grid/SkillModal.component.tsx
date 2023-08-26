import { Center, Image, Modal, Stack, Text } from "@mantine/core";
import SkillModalProps from "./SkillModalProps.interface";
import "../../../assets/css/skill-modal.styles.css";

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
            radius="xl"
            shadow="sm"
            className="skill-grid--skill-modal"
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
