import { serve } from "bun";

serve({
  websocket: {
    message(ws, message) {
        console.log(message);
        
        ws.send(message)
    },
    open(ws) {
        console.log("connection is open ");
        
    },
    close(ws , code , reason){
        console.log("connection is closed" , code , reason);

    }
  },
  fetch(request, server) {
    if(server.upgrade(request)){
        return
    }
    
    return new Response("failed", { status: 500 });
  },
});
