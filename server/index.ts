import { serve } from "bun";
import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { create: true });
const userID=crypto.randomUUID()
db.query("create table if not exists   Messages(id integer primary key  , content string , userId string)").run();
// db.query("insert into Messages  (content  , userId) values ('first message' , 'hhhhhh') ").run();

// const query = db.query("select *  from Messages");
// const data = query.all();
// console.log(data);

serve({
  websocket: {
    
    message(ws, message) {
      console.log(message);
      
      ws.send(message);
    },
    open(ws) {
      
      console.log("connection is open ");
    },
    close(ws, code, reason) {
      console.log("connection is closed", code, reason);
    },
  },
  fetch(request, server) {
    if (server.upgrade(request , {
      headers:{
        "Set-Cookie": `userID=${userID} `
      }
    })) {
      return;
    }

    return new Response("failed", { status: 500 });
  },
});
