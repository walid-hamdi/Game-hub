import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const isPageError = isRouteErrorResponse(useRouteError());

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isPageError ? "Page doesn't exist." : "An excepted error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
