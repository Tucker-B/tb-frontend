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
            fontFamily: "Montserrat, sans-serif",
        }}
        withGlobalStyles
    >
        <App />
    </MantineProvider>
);
