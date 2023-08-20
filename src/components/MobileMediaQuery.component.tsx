import { MediaQuery } from "@mantine/core";

export default function MobileMediaQuery(props: any) {
    return (
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            {props.children}
        </MediaQuery>
    );
}
