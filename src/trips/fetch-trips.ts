import axios from "axios";
import z from "zod";

export type Trip = z.infer<typeof tripSchema>;

export const fetchTrips = async () => {
  const { data: trips } = await axios.get("/trips");
  const dtos = trips.map(createTripDto);

  return dtos;
};

const tripAdvantageSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const tripSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  rating: z.number(),
  advantages: z.array(tripAdvantageSchema),
  co2kilograms: z.number(),
  countries: z.array(z.string()),
  days: z.number(),
  photoUrl: z.string(),
});

const createTripDto = (tripData: any) => {
  // TODO: consider safe parsing
  const dto = tripSchema.parse(tripData);

  return dto;
};
