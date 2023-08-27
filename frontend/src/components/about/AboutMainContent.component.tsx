import { Container, Space, Stack, Sx, Text, Title } from "@mantine/core";
import GreetingCard from "../GreetingCard.component";

export default function AboutMainContent() {
    const styles: Sx = {
        fontWeight: "bolder",
        fontFamily: "K2D, sans-serif",
        color: "#116aee",
        fontSize: "6rem",
        lineHeight: "1",
    };
    const stylesTwo: Sx = {
        fontWeight: "bolder",
        fontFamily: "K2D, sans-serif",
        color: "#116aee",
        fontSize: "4rem",
        lineHeight: "1",
        paddingTop: "3rem",
    };

    return (
        <Container sx={{ maxWidth: "50rem" }}>
            <GreetingCard
                firstLine=""
                name={
                    <>
                        <Title align="center" order={1} sx={styles}>
                            I'm Tucker.
                        </Title>
                        <Title align="center" order={2} sx={stylesTwo}>
                            Software Engineer.
                        </Title>
                    </>
                }
                description=""
            ></GreetingCard>
            <Stack align="center">
                <Text
                    sx={{
                        fontSize: "1.25rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                    }}
                >
                    Hey, my name is{" "}
                    <span style={{ color: "#116aee" }}>Tucker Barton</span>. I
                    work in the financial technology industry developing
                    scalable, reliable & performant enterprise applications.
                    <br />
                    <br />I have loved technology since I was a kid, always
                    wondering how my computer, Nintendo Game Boy, etc.{" "}
                    <i>actually</i> worked. Soon after graduating from the{" "}
                    <i>University of Georgia</i> in December of 2021, I began
                    working professionally as a Software Engineer in fintech.
                    <br />
                    <br />
                    These days, I'm using Java and the Spring framework to build
                    REST APIs, Python for services to sync data between
                    applications, Flask for small wrapper APIs that connect to
                    Google Cloud Platform & Amazon Web Services, and so forth.
                    <br />
                    <br />
                    In my free time, I'm constantly learning new things, whether
                    it be from books like{" "}
                    <i>
                        Web Scalability for Startup Engineers by Artur Ejsmont
                    </i>{" "}
                    to learn more on scalability & availability, C++ & Unreal
                    Engine to make the games similar to those that I grew up
                    with, such as <i>Rachet & Clank by Insomniac,</i> or human
                    languages like 日本語 (Japanese) to learn more about this
                    great & big world we live in.
                    <br />
                    <br />
                    If you would like to contact me & talk about anything
                    mentioned above, or about work opportunities, feel free to
                    get in touch by clicking the <i>Contact</i> tab at the top.
                    Thanks :)
                </Text>
            </Stack>
        </Container>
    );
}
