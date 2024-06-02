import { createUser, getUserByName } from "../models/userModels"
const authController=async (username:string   )=>{
    const data = getUserByName(username)
    if(!data){
      const userID = crypto.randomUUID();

        createUser(username ,userID)
    }
    console.log(getUserByName(username));
    
    
}


export {authController}