import { useState } from "react";
import {
    Anchor,
    AppShell,
    Navbar,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Title,
} from "@mantine/core";
import "./assets/css/app.styles.css";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
function App() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                >
                    <Text>Application navbar</Text>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Aside
                        p="md"
                        hiddenBreakpoint="sm"
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={<Footer />}
            header={<Header opened={opened} setOpened={setOpened} />}
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}

export default App;
