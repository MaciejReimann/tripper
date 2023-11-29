import { Text, Flex, FlexProps } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { getIconsCount, IconsCount } from "./get-icons-count";

interface TripRatingDisplayProps extends FlexProps {
  value: number;
  text?: string;
  getIconsCountForValue?: (rating: number) => IconsCount;
}

export const TripRatingDisplay = ({
  text = "Trip rating",
  value,
  getIconsCountForValue = getIconsCount,
}: TripRatingDisplayProps) => {
  const iconsCount = getIconsCountForValue(value);
  return (
    <Flex
      backgroundColor="background.white"
      width="100%"
      justifyContent="space-between"
    >
      <Text color="text.black" fontSize="sm" fontWeight="semibold">
        {text}:
      </Text>

      <Flex justifyContent="flex-end" gap={[2]} alignItems={"center"}>
        <Flex gap={[1]} alignItems={"center"}>
          {new Array(iconsCount).fill("").map((_, index) => {
            return <StarIcon key={index} color="icon.yellow" />;
          })}
        </Flex>

        <Text color="text.black" fontSize="sm" fontWeight="semibold">
          {value}
        </Text>
      </Flex>
    </Flex>
  );
};
