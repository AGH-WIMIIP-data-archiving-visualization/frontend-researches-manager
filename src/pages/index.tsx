import { useRouter } from "next/router";
import { useEffect } from "react";

const Main = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/public", undefined, { shallow: true });
  }, []);

  return <></>;
};

export default Main;
