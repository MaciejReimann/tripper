import { Text, Flex, FlexProps } from "@chakra-ui/react";

import { Emissions } from "../emissions";

interface EmissionsOffsetBoxProps extends FlexProps {
  value: Emissions;
  text?: string;
}
export const EmissionsOffsetBox = ({
  text = "Emissions offset",
  value,
  ...flexProps
}: EmissionsOffsetBoxProps) => {
  return (
    <Flex
      backgroundColor="background.darkGrey"
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
