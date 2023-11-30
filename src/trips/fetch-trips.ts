import axios from "axios";
import z from "zod";

import { Emissions } from "./emissions";
import { Rating } from "./rating";

export type Trip = z.infer<typeof tripSchema>;

export const fetchTrips = async (count: number, page?: number) => {
  const urlSearchParams = new URLSearchParams();

  urlSearchParams.append("count", count.toString());
  page && urlSearchParams.append("page", page.toString());
  const params = urlSearchParams.toString();

  console.log("params", params);
  const { data: trips } = await axios.get(`/trips?${params}`);

  return createTripDtos(trips);
};

export const fetchTrip = async (id?: string) => {
  if (!id) return;

  const { data: trip } = await axios.get(`/trips/${id}`);

  return createTripDto(trip);
};

const createTripDto = (tripData: any) => {
  const { co2kilograms, rating, ...parsed } = tripSchema.parse(tripData);

  const dto = {
    ...parsed,
    rating: new Rating(rating),
    emissions: new Emissions(co2kilograms),
  };

  return dto;
};

const createTripDtos = (tripsData: any[]) => {
  const dtos = tripsData.map(createTripDto);

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
