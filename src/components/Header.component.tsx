import { useState } from "react";
import MobileMediaQuery from "./MobileMediaQuery.component";

import {
    Header as HeaderMantine,
    MediaQuery,
    Burger,
    Title,
    Text,
    Navbar,
    Anchor,
    useMantineTheme,
} from "@mantine/core";
export default function Header(props: any) {
    const theme = useMantineTheme();

    return (
        <HeaderMantine height={{ base: 50, md: 70 }} p="md">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <MobileMediaQuery>
                    <Navbar
                        p="md"
                        hidden={!props.opened}
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Text>Application navbar</Text>
                    </Navbar>
                </MobileMediaQuery>
                <MobileMediaQuery>
                    <Burger
                        opened={props.opened}
                        onClick={() => props.setOpened((o: any) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MobileMediaQuery>
                <Title order={1}>TB</Title>
                <div className="classes.link">
                    <Anchor href="/">Home</Anchor>
                    <Anchor href="/about">About</Anchor>
                    <Anchor href="/work">Work</Anchor>
                    <Anchor href="/contact">Contact</Anchor>
                </div>
            </div>
        </HeaderMantine>
    );
}
