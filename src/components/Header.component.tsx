import { useState } from "react";
import DesktopMediaQuery from "./media_queries/DesktopMediaQuery.component";
import MobileMediaQuery from "./media_queries/MobileMediaQuery.component";
import DesktopNavigation from "./DesktopNavigation.component";
import {
    Header as HeaderMantine,
    MediaQuery,
    Burger,
    Title,
    Group,
    useMantineTheme,
} from "@mantine/core";
export default function Header(props: any) {
    const theme = useMantineTheme();

    const mainColor: string =
        theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0];

    return (
        <HeaderMantine
            height={{ base: 50, md: 70 }}
            p="md"
            sx={{
                backgroundColor: "#f8f9fa00",
                border: mainColor,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <MobileMediaQuery>
                    <Burger
                        opened={props.opened}
                        onClick={() => props.setOpened((o: any) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MobileMediaQuery>
                <Group
                    position="center"
                    sx={{
                        width: "100%",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                    }}
                >
                    {/* <Title order={1} sx={{ color: "#116aee" }}>
                        Tucker Barton
                    </Title> */}

                    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                        <DesktopNavigation />
                    </MediaQuery>
                </Group>
            </div>
        </HeaderMantine>
    );
}
