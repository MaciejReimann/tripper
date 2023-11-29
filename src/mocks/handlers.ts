import { http, HttpResponse } from "msw";

import trips from "./trips.json";

export const handlers = [
  http.get("/trips", () => {
    return HttpResponse.json(trips);
  }),

  http.get("/trips/:id", ({ params }) => {
    const index = Number(params.id) - 1;
    // TODO: handle errors
    return HttpResponse.json(trips[index]);
  }),
];
