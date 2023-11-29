import { http, HttpResponse } from "msw";

import trips from "./trips.json";

export const handlers = [
  http.get("/trips", () => {
    return HttpResponse.json(trips);
  }),
];
