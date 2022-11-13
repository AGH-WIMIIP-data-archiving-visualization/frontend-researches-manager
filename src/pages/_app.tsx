import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthGuardProvider from "../providers/AuthGuardProvider";
import { MainLayout } from "@/src/layouts";
import { useRef } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  const providerConfig: Auth0ProviderOptions = {
    domain: "dev-apaapvu0.us.auth0.com",
    clientId: "BFVEpluCw144TYoXQcaegQ7PFzAQBiqX",
    audience: "https://data-preprocessing-service",
    redirectUri: typeof window !== "undefined" ? window.location.origin : "",
  };

  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
          retry: false,
          staleTime: 5 * 60 * 1000,
        },
      },
    })
  );

  return (
    <Auth0Provider {...providerConfig}>
      <AuthGuardProvider>
        <QueryClientProvider client={queryClient.current}>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </QueryClientProvider>
      </AuthGuardProvider>
    </Auth0Provider>
  );
};

export default App;
