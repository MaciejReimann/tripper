import * as React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";

import { tripLoader } from "../router";

interface TripDetailsLayoutProps {
  children?: React.ReactNode;
}

export const TripDetailsPage = () => {
  const { trip } = useLoaderData<typeof tripLoader>();

  return <TripDetailsLayout />;
};

const TripDetailsLayout = ({ children }: TripDetailsLayoutProps) => {
  const { tripId } = useParams();
  console.log("id", tripId);
  return <>Id is: {tripId}</>;
};
