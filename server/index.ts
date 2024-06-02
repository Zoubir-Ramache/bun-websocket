import { serve } from "bun";
import { createDatabase } from "./megration/initial_megration";
import { userRouter } from "./router/user-routes";
import {
  chatRouter,
  openConnection,
  closeConnection,
} from "./router/chat-routes";

createDatabase();

serve({
  async fetch(request, server) {
    if (request.url.endsWith("/login")) {
      return await userRouter(request, server);
    } else if (request.url.endsWith("/ws")) {
      const userID = crypto.randomUUID();

      if (
        server.upgrade(request, {
          headers: {
            "Set-Cookie": `userID=${userID}; SameSite=Strict `,
          },
          data: { userID },
        })
      )
        return;
    }
    return new Response("you are lost", { status: 404 });
  },
  websocket: {
    message(ws, message) {
      chatRouter(ws, message);
      
    },
    open(ws) {
      openConnection(ws);
    },
    close(ws, code, reason) {
      closeConnection(ws, code, reason);
    },
  },
});
