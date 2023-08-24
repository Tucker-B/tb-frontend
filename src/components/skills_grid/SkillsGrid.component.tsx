import { Button, Card, Group, Modal, SimpleGrid, Text } from "@mantine/core";
import SkillCard from "./SkillCard.component";
import { useDisclosure } from "@mantine/hooks";
import SkillModal from "./SkillModal.component";
import { useState } from "react";
import reactImg from "../../assets/images/react.png";
import javaImg from "../../assets/images/java.svg";
import pythonImg from "../../assets/images/python.svg";
import javaScriptImg from "../../assets/images/javascript.svg";
import javaScriptTwoImg from "../../assets/images/javascript_two.svg";
import dockerImg from "../../assets/images/docker.svg";
import kubernetesImg from "../../assets/images/kubernetes.svg";
import jenkinsImg from "../../assets/images/jenkins.svg";
import awsImg from "../../assets/images/aws.svg";
import gcpImg from "../../assets/images/google_cloud.svg";

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
        if (skillImg == javaScriptImg) {
            skillImg = javaScriptTwoImg;
        }
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
                    skillDescription="Built enterprise application using React and micro frontends via Webpack 5's Module Federation (WMF), allowing for greater site availability, performance, & maintainability."
                    skillImg={reactImg}
                    onClick={setSkills}
                />

                <SkillCard
                    skillName="Java"
                    skillDescription="Developed & owned various APIs for enterprise applications using Java & the Spring framework, in addition to writing custom Java/Groovy scripts, improving certain workflows of project managers by up to 225%."
                    skillImg={javaImg}
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Python"
                    skillDescription="Created & owned various Python services for enterprise applications, including a synchronizing service & Flask APIs, resulting in significant reduction of business overhead."
                    skillImg={pythonImg}
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="JavaScript"
                    skillDescription="Produced various JavaScript scripts to speed up business workflows for an enterprise application, causing up to 50% less time for certain user needs."
                    skillImg={javaScriptImg}
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Docker"
                    skillDescription="Utilized Docker images & containerization for all applications developed & deployed, enabling easy dependency management & application builds."
                    skillImg={dockerImg}
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Kubernetes"
                    skillDescription="Deployed all enterprise applications into clusters, each with one or more nodes, pods, & containers using deployment yaml files & continuous delivery tools, such as Argo CD."
                    skillImg={kubernetesImg}
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="Jenkins"
                    skillDescription="Built & automated build steps for all applications using Jenkins, ensuring 100% of test cases pass, 0% compile-time errors exist, & code is scanned via SonarQube, Prisma prior to application deployments."
                    skillImg={jenkinsImg}
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="AWS"
                    skillDescription="Deployed all enterprise applications to AWS, using various AWS service such as EKS, EC2, S3, SES, etc. Certified as an AWS Solutions Architect Associate (2022)."
                    skillImg={awsImg}
                    onClick={setSkills}
                />
                <SkillCard
                    skillName="GCP"
                    skillDescription="Integrated GCP & its Drive API to my team's own API to increase Google Drive folder access times by 167%."
                    skillImg={gcpImg}
                    onClick={setSkills}
                />
            </SimpleGrid>
        </Group>
    );
}
