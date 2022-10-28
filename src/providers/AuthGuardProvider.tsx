import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loader } from "@/src/components";

export const AuthGuardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export default withAuthenticationRequired(AuthGuardProvider, {
  onRedirecting: () => <Loader isLoading />,
});
