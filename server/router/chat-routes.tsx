import { serve } from "bun";

export const createConnections=async ()=>{

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
  
    }