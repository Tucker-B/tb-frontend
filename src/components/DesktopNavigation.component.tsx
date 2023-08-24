import { Anchor, CSSObject, Group, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
export default function DesktopNavigation(props: any) {
    const navLinkStyles: CSSObject = {
        ":hover": { backgroundColor: "#0664F0", cursor: "pointer" },
    };

    return (
        <Group
            position="right"
            className={`classes.link ${props.className}`}
            noWrap={true}
        >
            <NavLink
                label="Home"
                component={Link}
                to="/"
                sx={navLinkStyles}
            ></NavLink>
            <NavLink
                label="About"
                component={Link}
                to="/about"
                sx={navLinkStyles}
            ></NavLink>
            <NavLink
                label="Work"
                component={Link}
                to="/work"
                sx={navLinkStyles}
            ></NavLink>
            <NavLink
                label="Contact"
                component={Link}
                to="/contact"
                sx={navLinkStyles}
            ></NavLink>
        </Group>
    );
}
