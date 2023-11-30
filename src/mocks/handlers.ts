import { http, HttpResponse, delay } from "msw";

import trips from "./trips.json";

export const handlers = [
  http.get("/trips", async ({ request }) => {
    await delay(1000);

    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    if (!page) {
      return new HttpResponse(null, { status: 404 });
    }

    const index = Number(page) - 1;

    const offset = 10;
    const start = index * offset;
    const end = index * offset + offset;

    return HttpResponse.json(trips.slice(start, end));
  }),

  http.get("/trips/:id", async ({ params }) => {
    await delay(1000);
    const index = Number(params.id) - 1;
    // TODO: handle errors
    return HttpResponse.json(trips[index]);
  }),
];
