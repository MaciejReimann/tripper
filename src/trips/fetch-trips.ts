import axios from "axios";
import z from "zod";

import { Emissions } from "./emissions";
import { Rating } from "./rating";

export type Trip = z.infer<typeof tripSchema>;

// TODO: consider using repository pattern

export const fetchTrips = async () => {
  const { data: trips } = await axios.get(`/trips`);

  return createTripDtos(trips);
};

export const fetchTrip = async (id: string) => {
  const { data: trip } = await axios.get(`/trips/${id}`);

  return createTripDto(trip);
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
  co2kilograms: z.number(), // TODO initialize OffsetEmission value object
  countries: z.array(z.string()),
  days: z.number(),
  photoUrl: z.string(),
});

const createTripDtos = (tripsData: any[]) => {
  const dtos = tripsData.map(createTripDto);

  return dtos;
};

const createTripDto = (tripData: any) => {
  // TODO: consider safe parsing
  const { co2kilograms, rating, ...parsed } = tripSchema.parse(tripData);

  const dto = {
    ...parsed,
    rating: new Rating(rating),
    emissions: new Emissions(co2kilograms),
  };

  return dto;
};
