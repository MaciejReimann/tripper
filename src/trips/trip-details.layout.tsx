import * as React from "react";
import { useParams } from "react-router-dom";
import { Grid, GridItem, Flex } from "@chakra-ui/react";

import { PageLayout } from "./page.layout";
import { GoBackLink } from "./go-back.link";

interface TripDetailsLayoutProps {
  heading?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
}

export const TripDetailsLayout = ({
  heading,
  leftSide,
  rightSide,
}: TripDetailsLayoutProps) => {
  const { tripId } = useParams();
  console.log("id", tripId);
  return (
    <PageLayout>
      <Grid width="100%" templateColumns="repeat(12, 1fr)" gap={8}>
        <GridItem colSpan={12}>
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems={["flex-start"]}
            gap={[4, 10]}
            height="100%"
          >
            <GoBackLink />

            {heading}
          </Flex>
        </GridItem>

        <GridItem colSpan={[12, 8]}>{leftSide}</GridItem>

        <GridItem colSpan={[12, 4]}>{rightSide}</GridItem>
      </Grid>
    </PageLayout>
  );
};
