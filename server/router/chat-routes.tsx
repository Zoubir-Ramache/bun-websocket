import type { ServerWebSocket } from "bun";

const connections = new Set<any>();
const chatRouter = (ws: ServerWebSocket<unknown>, message: string | Buffer) => {
  const res = JSON.stringify({ message, data: ws.data });

  for (let conn of connections) {
    if (conn.readyState == WebSocket.OPEN) {
      conn.send(res);
    }
  }
};
const openConnection = (ws: ServerWebSocket<unknown>) => {
  connections.add(ws);
};
const closeConnection = (
  ws: ServerWebSocket<unknown>,
  code: number,
  reason: string
) => {
  connections.delete(ws);
  console.log("connection is closed", code, reason);
};

export { openConnection, chatRouter, closeConnection };
