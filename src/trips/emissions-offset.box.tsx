import { Text, Flex, FlexProps } from "@chakra-ui/react";

import { Emissions } from "./emissions";

interface EnmissionsDisplayProps extends FlexProps {
  value: Emissions;
  text?: string;
}
export const EmissionsOffsetDisplay = ({
  text = "Emissions offset",
  value,
  ...flexProps
}: EnmissionsDisplayProps) => {
  return (
    <Flex
      backgroundColor="background.darkBlue"
      justifyContent={"space-between"}
      padding={[3]}
      borderRadius={"xl"}
      {...flexProps}
    >
      <Text color="text.white" fontSize="sm">
        {text}:
      </Text>
      <Text color="text.white" fontSize="sm" fontWeight="semibold">
        {value.toString()}
      </Text>
    </Flex>
  );
};
