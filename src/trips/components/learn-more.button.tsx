import { Button, ButtonProps } from "@chakra-ui/react";

interface LearnMoreButtonProps extends ButtonProps {
  text?: string;
}

export const LearnMoreButton = ({
  text = "Learn More",
  ...buttonProps
}: LearnMoreButtonProps) => {
  return (
    <Button
      backgroundColor="button.blue"
      color="text.white"
      fontSize="sm"
      {...buttonProps}
    >
      {text}
    </Button>
  );
};
