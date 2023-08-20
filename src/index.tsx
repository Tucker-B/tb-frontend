import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <MantineProvider
        theme={{
            colorScheme: "dark",

            headings: {
                fontWeight: "bold",
                fontFamily: "Inria-Serif, serif",
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
