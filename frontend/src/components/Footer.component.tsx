import { Footer as FooterMantine, Text, useMantineTheme } from "@mantine/core";
export default function Footer() {
    const theme = useMantineTheme();
    const mainColor: string =
        theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0];
    return (
        <FooterMantine
            height={60}
            p="md"
            sx={{
                borderColor: mainColor,
                backgroundColor: "#f8f9fa00",
                borderTopColor: "#f8f9fa00",
                display: "none",
            }}
        >
            <Text align="center">Developed by Tucker Barton</Text>
        </FooterMantine>
    );
}
