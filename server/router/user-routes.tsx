import type { Server } from "bun";
import { authController } from "../controller/authController";
export const userRouter = async (request: Request, server: Server): Promise<Response> => {
  if(request.method =="POST"){
    
    const data:{username:string} =await request.json()
    const {username}=data
    
    await authController(username)
    
    
    return new Response(" hey" , {status:201 });
  }
  return new Response(" login");
};
