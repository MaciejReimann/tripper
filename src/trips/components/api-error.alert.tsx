import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export const ApiErrorAlert = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Oopsies!</AlertTitle>
      <AlertDescription>
        It did not go too well. Please reload or try again later
      </AlertDescription>
    </Alert>
  );
};
