import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@chakra-ui/react";

interface GoBackLinkProps extends ButtonProps {
  text?: string;
}

export const GoBackLink = ({
  text = "Go back",
  ...buttonProps
}: GoBackLinkProps) => {
  return (
    <Link to={".."}>
      <Button
        variant="link"
        color="text.grey"
        fontSize="xs"
        as="u"
        {...buttonProps}
      >
        {text}
      </Button>
    </Link>
  );
};
