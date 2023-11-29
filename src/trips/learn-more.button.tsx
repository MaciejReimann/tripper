import { Button } from "@chakra-ui/react";

interface LearnMoreButtonProps {
  renderChildren: (text: string) => React.ReactNode;
}

export const LearnMoreButton = ({ renderChildren }: LearnMoreButtonProps) => {
  return (
    <Button
      variant="solid"
      backgroundColor="button.blue"
      color="text.white"
      fontSize="sm"
    >
      {renderChildren("Learn More")}
    </Button>
  );
};
