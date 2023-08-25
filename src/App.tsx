import { useState } from "react";
import { AppShell, Navbar, useMantineTheme } from "@mantine/core";
import "./assets/css/app.styles.css";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import Home from "./pages/Home.component";
import About from "./pages/About.component";
import Contact from "./pages/Contact.component";
import Work from "./pages/Work.component";
import MobileMediaQuery from "./components/media_queries/MobileMediaQuery.component";
import MobileNavigation from "./components/MobileNavigation.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PATHS from "./@types/constants/Paths";
import MANTINE_THEME from "./@types/constants/MantineTheme";

function App() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <Router>
            <AppShell
                styles={{
                    main: {
                        background:
                            theme.colorScheme === MANTINE_THEME.DARK
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="10000rem"
                asideOffsetBreakpoint="10000rem"
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
                <Routes>
                    <Route path={PATHS.HOME} element={<Home />} />
                    <Route path={PATHS.ABOUT} element={<About />} />
                    <Route path={PATHS.WORK} element={<Work />} />
                    <Route path={PATHS.CONTACT} element={<Contact />} />
                </Routes>
            </AppShell>
        </Router>
    );
}

export default App;
