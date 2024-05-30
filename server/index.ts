import { serve, type ServerWebSocket } from "bun";
import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { create: true });
db.query(
  "create table if not exists   Messages(id integer primary key  , content string , userId string)"
).run();
// db.query("insert into Messages  (content  , userId) values ('first message' , 'hhhhhh') ").run();

// const query = db.query("select *  from Messages");
// const data = query.all();
// console.log(data);
const connections = new Set<any>();
serve({
  websocket: {
    message(ws, message) {
      const res = JSON.stringify({ message, data: ws.data });

      
      for (let conn of connections) {
        
        
        if (conn.readyState == WebSocket.OPEN) {
          conn.send(res);
          
        }
      }
    },
    open(ws) {
      connections.add(ws );
      
      
      console.log("connection is open ", ws.data);
    },
    close(ws, code, reason) {
      connections.delete(ws);
      console.log("connection is closed", code, reason);
    },
  },
  fetch(request, server) {
    const userID = crypto.randomUUID();
    if (
      server.upgrade(request, {
        headers: {
          "Set-Cookie": `userID=${userID}; SameSite=Strict `,
        },
        data: { userID },
      })
    ) {
      return;
    }

    return new Response("failed", { status: 500 });
  },
});
