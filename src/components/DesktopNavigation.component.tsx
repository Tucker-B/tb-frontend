import { Anchor, Group, NavLink } from "@mantine/core";
export default function DesktopNavigation(props: any) {
    // If mobile,
    //      Stack
    // else,
    //      Span
    return (
        <Group
            position="right"
            className={`classes.link ${props.className}`}
            noWrap={true}
        >
            <NavLink label="Home" component="a" href="/"></NavLink>
            <NavLink label="About" component="a" href="/about"></NavLink>
            <NavLink label="Work" component="a" href="/work"></NavLink>
            <NavLink label="Contact" component="a" href="/contact"></NavLink>
        </Group>
    );
}
