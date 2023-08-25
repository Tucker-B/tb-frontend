import { CSSObject, Group, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import PATHS from "../@types/constants/Paths";
import "../assets/css/desktop-navigation.styles.css";

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
                to={PATHS.HOME}
                className="desktop-navigation-nav-link"
            ></NavLink>
            <NavLink
                label="About"
                component={Link}
                to={PATHS.ABOUT}
                sx={navLinkStyles}
                className="desktop-navigation-nav-link"
            ></NavLink>
            <NavLink
                label="Work"
                component={Link}
                to={PATHS.WORK}
                sx={navLinkStyles}
                className="desktop-navigation-nav-link"
            ></NavLink>
            <NavLink
                label="Contact"
                component={Link}
                to={PATHS.CONTACT}
                sx={navLinkStyles}
                className="desktop-navigation-nav-link"
            ></NavLink>
        </Group>
    );
}
