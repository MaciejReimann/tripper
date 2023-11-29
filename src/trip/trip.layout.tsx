import { useParams } from "react-router-dom";

interface TripLayoutProps {
  children?: React.ReactNode;
}

export const TripLayout = ({ children }: TripLayoutProps) => {
  const { tripId } = useParams();
  console.log("id", tripId);
  return <>Id is: {tripId}</>;
};
