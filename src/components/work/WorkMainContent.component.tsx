import { Container, Stack, Text } from "@mantine/core";
import GreetingCard from "../GreetingCard.component";
import WorkCard from "./WorkCard.component";

export default function WorkMainContent() {
    const tsysText = (
        <Text
            sx={{
                paddingTop: "1rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingBottom: "2rem",
            }}
        >
            I have worked at TSYS since the beginning of March 2022, where my
            day-to-day tasks involve creating REST APIs using <i>Java</i> &{" "}
            <i>Spring Boot</i>, services using <i>Python</i>, and scripts using{" "}
            <i>JavaScript</i> or <i>Groovy</i>.
            <br /> <br />
            All microservices I develop are containerized via <i>Docker</i>,
            deployed through CICD / automation tools such as <i>Jenkins</i> &{" "}
            <i>Argo CD</i>, & live inside the cloud (<i>Amazon Web Services</i>
            ).
        </Text>
    );
    return (
        <Container>
            <Stack>
                <GreetingCard
                    firstLine=""
                    name={
                        <Text sx={{ lineHeight: "1" }} align="center">
                            Work Experience
                        </Text>
                    }
                    description=""
                ></GreetingCard>
                <WorkCard
                    companyName="TSYS"
                    jobTitle="Software Engineer"
                    industry="Fintech"
                    skills={[
                        { name: "Java", color: "orange" },
                        { name: "Spring", color: "green" },
                        { name: "Python", color: "teal" },
                    ]}
                    description={tsysText}
                ></WorkCard>
            </Stack>
        </Container>
    );
}
