import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@chakra-ui/react";

interface GoBackLinkProps extends ButtonProps {}

export const GoBackLink = ({ ...buttonProps }: GoBackLinkProps) => {
  return (
    <Link to={".."}>
      <Button
        variant="link"
        color="text.grey"
        fontSize="xs"
        as="u"
        {...buttonProps}
      >
        Go back
      </Button>
    </Link>
  );
};
