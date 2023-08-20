import { MediaQuery } from "@mantine/core";

export default function DesktopMediaQuery(props: any) {
    return (
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            {props.children}
        </MediaQuery>
    );
}
