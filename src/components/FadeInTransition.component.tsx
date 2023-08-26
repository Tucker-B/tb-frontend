import { useEffect, useState } from "react";
import { Container, Transition } from "@mantine/core";

export default function FadeInTransition({ children }: any) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMounted(true);
        }, 250);
    }, []);
    return (
        <Transition
            mounted={mounted}
            transition="fade"
            duration={1000}
            timingFunction="ease"
        >
            {(styles) => {
                return <Container style={{ ...styles }}>{children}</Container>;
            }}
        </Transition>
    );
}
