import { Flex } from "@/src/components";
import Image from "next/image";
export const Empty = () => {
  return (
    <Flex justify="center" fullW>
      <Image src={"/images/noData.jpg"} width={450} height={450} />
    </Flex>
  );
};
