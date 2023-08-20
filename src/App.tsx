import { useState } from "react";
import { AppShell, Navbar, Text, useMantineTheme } from "@mantine/core";
import "./assets/css/app.styles.css";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import MobileMediaQuery from "./components/media_queries/MobileMediaQuery.component";
import MobileNavigation from "./components/MobileNavigation.component";

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
                <MobileMediaQuery>
                    <Navbar
                        p="md"
                        hiddenBreakpoint="sm"
                        hidden={!opened}
                        width={{ sm: 200, lg: 300 }}
                    >
                        <MobileNavigation />
                    </Navbar>
                </MobileMediaQuery>
            }
            footer={<Footer />}
            header={<Header opened={opened} setOpened={setOpened} />}
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}

export default App;
