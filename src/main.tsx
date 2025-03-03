import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import { EnderecoProvider } from "./contexts/enderecoContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <EnderecoProvider>
        <App />
      </EnderecoProvider>
    </QueryClientProvider>
  </StrictMode>,
);
