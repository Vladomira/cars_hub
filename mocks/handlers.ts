import { rest } from "msw";
import { mockCars } from "./mockData";

export const handlers = [
   rest.get("/", async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockCars));
   }),
];
