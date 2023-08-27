import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import MANTINE_THEME from "./@types/constants/MantineTheme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <MantineProvider
        theme={{
            colorScheme: "light",

            headings: {
                fontWeight: "bold",

                sizes: {
                    h1: { fontSize: "1.75rem" },
                    h2: { fontSize: "1.5rem" },
                    h3: { fontSize: "1.25rem" },
                },
            },
            fontFamily: "Montserrat, sans-serif",
        }}
        withGlobalStyles
    >
        <App />
    </MantineProvider>
);
