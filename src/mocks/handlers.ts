import { http, HttpResponse, delay } from "msw";

import trips from "./trips.json";

export const handlers = [
  http.get("/trips", async () => {
    await delay(1000);

    return HttpResponse.json(trips);
  }),

  http.get("/trips/:id", async ({ params }) => {
    await delay(1000);
    const index = Number(params.id) - 1;
    // TODO: handle errors
    return HttpResponse.json(trips[index]);
  }),
];
