import { http, HttpResponse, delay } from "msw";

import trips from "./trips.json";

export const handlers = [
  http.get("/trips", async ({ request }) => {
    await delay(1000);

    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const count = url.searchParams.get("count");

    if (!page) {
      return new HttpResponse(null, { status: 404 });
    }

    const index = Number(page) - 1;
    const defaultOffset = 10;

    const offset = isNaN(Number(count)) ? defaultOffset : Number(count);
    const start = index * offset;
    const end = index * offset + offset;

    return HttpResponse.json(trips.slice(start, end));
  }),

  http.get("/trips/:id", async ({ params }) => {
    await delay(1000);
    const index = Number(params.id) - 1;

    return HttpResponse.json(trips[index]);
  }),
];
