import { http, HttpResponse, delay } from "msw";

import trips from "./trips.json";

const defaultDelay = 2000;

export const handlers = [
  http.get("/trips", async ({ request }) => {
    await delay(defaultDelay);

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
    await delay(defaultDelay);
    const index = Number(params.id) - 1;

    return HttpResponse.json(trips[index]);
  }),
];
