import { useState } from "react";
import { AppShell, Navbar, Text, useMantineTheme } from "@mantine/core";
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

function App() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <Router>
            <AppShell
                styles={{
                    main: {
                        background:
                            theme.colorScheme === "dark"
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
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AppShell>
        </Router>
    );
}

export default App;
