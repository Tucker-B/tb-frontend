import { Anchor, Group } from "@mantine/core";
export default function DesktopNavigation(props: any) {
    // If mobile,
    //      Stack
    // else,
    //      Span
    return (
        <Group position="right" className={`classes.link ${props.className}`}>
            <Anchor href="/">Home</Anchor>
            <Anchor href="/about">About</Anchor>
            <Anchor href="/work">Work</Anchor>
            <Anchor href="/contact">Contact</Anchor>
        </Group>
    );
}
