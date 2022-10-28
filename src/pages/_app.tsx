import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthGuardProvider from "../providers/AuthGuardProvider";

const App = ({ Component, pageProps }: AppProps) => {
  const providerConfig: Auth0ProviderOptions = {
    domain: "dev-apaapvu0.us.auth0.com",
    clientId: "BFVEpluCw144TYoXQcaegQ7PFzAQBiqX",
    audience: "https://data-preprocessing-service",
    redirectUri: typeof window !== "undefined" ? window.location.origin : "",
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <Auth0Provider {...providerConfig}>
      <AuthGuardProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthGuardProvider>
    </Auth0Provider>
  );
};

export default App;
