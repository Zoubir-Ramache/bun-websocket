import type { Server } from "bun";

export const userRouter = (request: Request, server: Server): Response => {
  return new Response(" login");
};
