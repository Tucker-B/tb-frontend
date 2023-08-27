import { Anchor, Stack } from "@mantine/core";

export default function MobileNavigation(props: any) {
    return (
        <Stack
            spacing="xl"
            h="100%"
            sx={(theme) => ({
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[7]
                        : theme.colors.gray[0],
            })}
        >
            <Anchor ta="center" href="/">
                Home
            </Anchor>
            <Anchor ta="center" href="/about">
                About
            </Anchor>
            <Anchor ta="center" href="/work">
                Work
            </Anchor>
            <Anchor ta="center" href="/contact">
                Contact
            </Anchor>
        </Stack>
    );
}
